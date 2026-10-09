param([string]$Boards, [string]$Out)
$b = [IO.File]::ReadAllText($Boards) | ConvertFrom-Json
$o = foreach ($bd in $b) { [ordered]@{ id = $bd.id; nombre = $bd.nombre; nivel = $bd.nivel; w = $bd.w; h = $bd.h; n = @($bd.nodos | ForEach-Object { , @($_[0], $_[1], $_[2], $_[3], $_[4], $_[5], $_[6]) }); l = @($bd.lineas) } }
$data = ConvertTo-Json @($o) -Depth 6 -Compress
$ids = @($b | ForEach-Object { $_.nodos } | Where-Object { $_[6] -gt 0 } | ForEach-Object { [int]$_[6] } | Sort-Object -Unique)
$icons = ($ids | ForEach-Object { "    ${_}: 'icons/clerigo/$_.webp'," }) -join "`n"
$nl = "`n"
$js = '// Aion 2 Global S1 — Tableros Daevanion del Clérigo: datos de la clase para daevanion.js' + $nl +
  '// Tableros reales del juego y ruta JcE de couga54 (https://couga54.github.io/aion2-guides/en/cleric/#daevanion),' + $nl +
  '// con los textos del cliente en español de metabot.gg/es_ES. Los datos los genera tools/extraer-tableros.ps1 (-Ids 71,72,73,74,76).' + $nl +
  '// nodos n: [fila, columna, tipo (S inicio, G atributo, P pasiva, A activa, N especial), coste, en ruta, texto, id de habilidad]' + $nl +
  '// líneas l: [x1, y1, x2, y2, en ruta]' + $nl +
  'window.DV_CLASS = {' + $nl +
  '  data: ' + $data + ',' + $nl +
  '  // Iconos locales por id de habilidad (metabot.gg)' + $nl +
  '  icons: {' + $nl + $icons + $nl + '  },' + $nl +
  '  notas: {' + $nl +
  '    71: ''Las cuatro esquinas (Velocidad de Hechizo y Reducción de Enfriamiento) van primero, después tus habilidades.'',' + $nl +
  '    72: ''Toma las cuatro esquinas: Amplificación de Daño primero, Tolerancia a Daño después.'',' + $nl +
  '    73: ''Lucia se salta casi todo y va directa a las habilidades activas que usas: por eso la ruta es corta. La Tolerancia a Daño Crítico no sirve en JcE (los jefes no hacen críticos).'',' + $nl +
  '    74: ''Solo Acierto de Multigolpe: la Resistencia a Multigolpe no sirve en JcE (los jefes no hacen multigolpe).'',' + $nl +
  '    76: ''Tablero JcJ: solo da Amplificación y Tolerancia JcJ, sin habilidades. En JcE no gastes puntos aquí; termina antes los otros cuatro.'',' + $nl +
  '  },' + $nl +
  '  // Prioridad del orden de clics (couga54): primero los nodos naranjas de ataque (Velocidad de Hechizo, Enfriamiento,' + $nl +
  '  // Amplificación de Daño y de Daño Crítico, Multigolpe); luego Ataque y Crítico; luego las habilidades (Condena,' + $nl +
  '  // Aura divina y Centella antes que el resto); luego los naranjas defensivos; las pasivas al final.' + $nl +
  '  prio: function (board, n) {' + $nl +
  '    const [, , t, , , label, sk] = n;' + $nl +
  '    if (t === ''N'') return /Tolerancia|Resistencia/.test(label) ? 5 : 1;' + $nl +
  '    if (t === ''G'' && /^(Ataque Adicional|Crítico) \+/.test(label)) return 2;' + $nl +
  '    if (t === ''A'') return [17350000, 17150000, 17060000].includes(sk) ? 3 : 4;' + $nl +
  '    if (t === ''P'') return 6;' + $nl +
  '    return 9;' + $nl +
  '  },' + $nl +
  '};' + $nl
[IO.File]::WriteAllText($Out, $js, (New-Object Text.UTF8Encoding($false)))
"iconos: $($ids.Count) | bytes $($js.Length)"
