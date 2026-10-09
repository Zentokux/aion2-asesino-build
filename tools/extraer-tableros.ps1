param([string]$Html, [string]$Metabot, [string]$Out)
# Extrae los tableros Daevanion PvE de couga54 (posiciones, ruta "on", líneas) y les pone
# los textos en español del cliente (metabot.gg/es_ES) cruzando por fila/columna.
$c = [IO.File]::ReadAllText($Html)
$mb = [IO.File]::ReadAllText($Metabot) | ConvertFrom-Json
$skData = [regex]::Match($c, '<script type="application/json" id="sk-data"[^>]*>(.*?)</script>', 'Singleline').Groups[1].Value | ConvertFrom-Json
$boards = @()
foreach ($id in 41, 42, 43, 44, 46) {
  $start = $c.IndexOf("id=`"dvp-pve-$id`"")
  $end = $c.IndexOf('class="dvb-panel"', $start + 10)
  if ($end -lt 0) { $end = $c.IndexOf('</div></div>', $start) + 2000 }
  $p = $c.Substring($start, $end - $start)
  $vb = [regex]::Match($p, 'viewBox="0 0 (\d+) (\d+)"')
  $W = [int]$vb.Groups[1].Value; $H = [int]$vb.Groups[2].Value
  $lines = @()
  foreach ($m in [regex]::Matches($p, '<line x1="([\d.]+)" y1="([\d.]+)" x2="([\d.]+)" y2="([\d.]+)"( class="on")?')) {
    $lines += , @([int]([double]$m.Groups[1].Value - 0.5), [int]([double]$m.Groups[2].Value - 0.5), [int]([double]$m.Groups[3].Value - 0.5), [int]([double]$m.Groups[4].Value - 0.5), [int]($m.Groups[5].Success))
  }
  $mbBoard = $mb.boards | Where-Object { [int]$_.id -eq $id }
  $mbPos = @{}; foreach ($n in $mbBoard.nodes) { $off = (17 - $W) / 2; $mbPos["$([int]$n.row - $off),$([int]$n.col - $off)"] = $n }
  $nodes = @()
  foreach ($m in [regex]::Matches($p, '<span class="dvb-n ([^"]*)" style="left:([\d.]+)%;top:([\d.]+)%" data-sk="([^"]*)"')) {
    $cls = $m.Groups[1].Value -split ' '
    $x = [int][Math]::Round([double]$m.Groups[2].Value / 100 * $W - 0.5)
    $y = [int][Math]::Round([double]$m.Groups[3].Value / 100 * $H - 0.5)
    $g = ($cls | Where-Object { $_ -match '^g\d+$' }) -replace 'g', ''
    $sk = $m.Groups[4].Value
    $mn = $mbPos["$y,$x"]
    $label = if ($mn) { [string]$mn.label } elseif ($skData.$sk) { [string]$skData.$sk.d } else { $sk }
    $skillId = if ($mn -and $mn.skillId) { [int]$mn.skillId } else { 0 }
    $cost = if ($mn) { [int]$mn.cost } else { 0 }
    $type = if ($sk -like 'dv::0:*') { 'S' } elseif ($sk -notlike 'dv:*') { if ($cost -eq 2) { 'P' } else { 'A' } } elseif ($cost -ge 4) { 'N' } elseif ($cost -ge 2) { 'M' } else { 'G' }
    $nodes += , @($y, $x, $type, $cost, [int]($cls -contains 'on'), $label, $skillId, $sk, [int]$g)
  }
  $boards += [ordered]@{ id = $id; nombre = [string]$mbBoard.name; nivel = [int]$mbBoard.needLevel; w = $W; h = $H; nodos = $nodes; lineas = $lines; mbNodos = @($mbBoard.nodes).Count }
}
$boards | ConvertTo-Json -Depth 6 -Compress | ForEach-Object { [IO.File]::WriteAllText($Out, $_, (New-Object Text.UTF8Encoding($false))) }
foreach ($b in $boards) {
  $on = @($b.nodos | Where-Object { $_[4] -eq 1 })
  $sum = 0; foreach ($n in $on) { $sum += $n[3] }
  $miss = @($b.nodos | Where-Object { $_[3] -eq 0 -and $_[2] -ne 'S' }).Count
  "{0} ({1}x{2}): {3} nodos couga / {4} metabot, ruta {5} nodos = {6} pts, sin cruce metabot: {7}, grados: {8}" -f $b.nombre, $b.w, $b.h, $b.nodos.Count, $b.mbNodos, $on.Count, $sum, $miss, ((($b.nodos | ForEach-Object { "$($_[8])/$($_[3])" }) | Sort-Object -Unique) -join ',')
}
