param([string]$Html, [string]$Out)
# Saca el arreglo "boards" que metabot incrusta (escapado) en su página de Daevanion.
$c = [IO.File]::ReadAllText($Html)
$k = $c.IndexOf('\"boards\":[')
if ($k -lt 0) { throw 'No encontré boards' }
$s = $c.Substring($k + '\"boards\":'.Length)
# Desescapar un nivel: \\ -> \ y \" -> "
$sb = New-Object Text.StringBuilder
for ($i = 0; $i -lt $s.Length; $i++) {
  $ch = $s[$i]
  if ($ch -eq '\' -and $i + 1 -lt $s.Length) { [void]$sb.Append($s[$i + 1]); $i++ } else { [void]$sb.Append($ch) }
  if ($sb.Length -gt 3000000) { break }
}
$u = $sb.ToString()
# Cortar el arreglo con conteo de corchetes, respetando cadenas
$depth = 0; $inStr = $false; $end = -1
for ($i = 0; $i -lt $u.Length; $i++) {
  $ch = $u[$i]
  if ($inStr) { if ($ch -eq '\') { $i++ } elseif ($ch -eq '"') { $inStr = $false }; continue }
  if ($ch -eq '"') { $inStr = $true } elseif ($ch -eq '[' -or $ch -eq '{') { $depth++ } elseif ($ch -eq ']' -or $ch -eq '}') { $depth--; if ($depth -eq 0) { $end = $i; break } }
}
$arr = $u.Substring(0, $end + 1)
$json = '{"boards":' + $arr + '}'
$o = $json | ConvertFrom-Json
[IO.File]::WriteAllText($Out, $json, (New-Object Text.UTF8Encoding($false)))
foreach ($b in $o.boards) { "{0} {1} nv{2}: {3} nodos" -f $b.id, $b.name, $b.needLevel, @($b.nodes).Count }
