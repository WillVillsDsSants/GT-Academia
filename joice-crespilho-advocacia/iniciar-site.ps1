# Inicia o site em modo de desenvolvimento (Ctrl+C para parar).
# Nao precisa instalar nada: usa o Node.js portatil em tools/node.

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$node = Join-Path $root "tools\node"

# Usa o Node/npm portateis apenas nesta janela, sem alterar o PATH do sistema
$env:PATH = "$node;$env:PATH"

Set-Location $root

if (-not (Test-Path (Join-Path $root "node_modules"))) {
    Write-Host "Primeira vez rodando: instalando dependencias (pode levar alguns minutos)..." -ForegroundColor Yellow
    npm install
}

Write-Host ""
Write-Host "Abrindo o site em http://localhost:3000" -ForegroundColor Green
Write-Host "Deixe esta janela aberta. Para parar, feche a janela ou aperte Ctrl+C." -ForegroundColor Green
Write-Host ""

npm run dev
