# Clona ou atualiza este repositório em %USERPROFILE%\skills e copia as skills para %USERPROFILE%\.claude\skills (Claude Code).
$ErrorActionPreference = "Stop"
$repo = Join-Path $HOME "skills"
$dest = Join-Path $HOME ".claude\skills"
if (Test-Path (Join-Path $repo ".git")) { git -C $repo pull --ff-only }
else { git clone https://github.com/solutionsnovaai-bit/skills $repo }
New-Item -ItemType Directory -Force -Path $dest | Out-Null
robocopy (Join-Path $repo ".claude\skills") $dest /E /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy falhou ($LASTEXITCODE)" }
Write-Host "Skills instaladas em $dest"
Get-ChildItem $dest -Directory | Select-Object -ExpandProperty Name
