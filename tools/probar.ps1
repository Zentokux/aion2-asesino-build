param([string]$Page, [string]$Section = 'progression', [string]$Query = '', [string]$Size = '1300,1400', [string]$Name = 'shot')
# Copia el proyecto a una carpeta temporal, inyecta un comprobador y saca una captura con Edge sin ventana.
$p = 'C:\Users\Zentoku\Documents\aion2-asesino-build-main'
$s = Join-Path $env:TEMP ('aion2-pruebas' + [char]92 + 't-' + $Name); New-Item -ItemType Directory -Force (Split-Path $s) | Out-Null; if (Test-Path $s) { Remove-Item $s -Recurse -Force }
Copy-Item $p $s -Recurse
$t = [IO.File]::ReadAllText("$s\$Page")
$inj = @'
<script>window.__errs=[];window.addEventListener("error",function(e){window.__errs.push(e.message+" @"+(e.filename||"").split("/").pop()+":"+e.lineno)});
window.addEventListener("load",function(){setTimeout(function(){var q=new URLSearchParams(location.search),out=[];
try{if(window.PLANNER_STATES){var S=PLANNER_STATES,bad=[],prev={};for(var l=1;l<=45;l++){var s=S[l];if(s.bank<0)bad.push("banco<0 nv"+l);for(var id in s.ranks){var r=s.ranks[id];if(prev[id]!==undefined&&r<prev[id])bad.push("baja "+id+" nv"+l);if(r>rankCap(l,SKILLS[id].unlock))bad.push(id+">tope nv"+l);prev[id]=r;}}
var f=S[45];out.push("PLAN "+(bad.join(",")||"OK")+" total "+f.cum+" sobra "+f.bank);var sb=[];for(var l=22;l<=45;l++){if(S[l].shBank<0)sb.push("esq<0 nv"+l)}out.push("EST "+(sb.join(",")||"OK")+" "+Object.keys(f.stRanks).map(function(k){return k+"="+f.stRanks[k]}).join(" ")+" sobran "+f.shBank+" | 32:"+JSON.stringify(S[32].stRanks)+" 37:"+JSON.stringify(S[37].stRanks));out.push("FINAL "+Object.keys(f.ranks).filter(function(k){return f.ranks[k]>1}).map(function(k){return k+"="+f.ranks[k]}).join(" "));
if(q.get("plan")){var pl=[];for(var l=1;l<=45;l++){pl.push(l+":"+S[l].investments.map(function(i){return i.id+i.from+">"+i.to}).join(","))}out.push("PASOS "+pl.join("  "))}}}catch(e){out.push("ERR plan "+e.message)}
try{var tabs=document.querySelectorAll(".dv-tab");var dv=[];tabs.forEach(function(t,i){t.click();dv.push(t.querySelector("b").textContent+"="+document.querySelectorAll(".dv-list li").length+"p/"+t.querySelector("i").textContent)});if(tabs[0])tabs[+(q.get("b")||0)].click();out.push("DAEV "+dv.join(" "))}catch(e){out.push("ERR dae "+e.message)}
if(q.get("lv")&&window.renderLevel){currentLvl=+q.get("lv");renderLevel(currentLvl);}
var broken=[].filter.call(document.images,function(i){return i.complete&&i.naturalWidth===0}).map(function(i){return i.src.split("/").pop()});
var d=document.createElement("pre");d.style.cssText="position:fixed;top:0;left:0;right:0;z-index:9999;background:#300;color:#fff;font:12px monospace;padding:4px;white-space:pre-wrap;margin:0";
d.textContent="ERRORES: "+(window.__errs.join(" | ")||"ninguno")+" | imgs rotas: "+(broken.join(",")||"0")+"\n"+out.join("\n");document.body.appendChild(d);
var el=document.getElementById(q.get("at")||"x");if(el)el.scrollIntoView();},500)});</script>
'@
if ($Section -ne 'all') { $inj += '<style>body>header,body>nav,section:not(#' + $Section + '){display:none!important}</style>' }
[IO.File]::WriteAllText("$s\$Page", $t.Replace('<head>', '<head>' + $inj), (New-Object Text.UTF8Encoding($false)))
$url = 'file:///' + $s.Replace([char]92, [char]47) + '/' + $Page + '?at=' + $Section + $Query
Start-Process 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' -ArgumentList '--headless', '--disable-gpu', '--no-first-run', "--user-data-dir=$s-prof", "--screenshot=$s.png", "--window-size=$Size", '--virtual-time-budget=5000', "`"$url`"" -Wait -NoNewWindow
"$s.png"
