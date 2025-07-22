#!/bin/bash

# 终端全局代理开启脚本
# 使用方法: source ./proxy-on.sh 或 . ./proxy-on.sh

PROXY_HOST="127.0.0.1"
PROXY_PORT="7890"
PROXY_URL="http://${PROXY_HOST}:${PROXY_PORT}"

echo "🔧 正在开启终端全局代理..."
echo "代理地址: ${PROXY_URL}"

# 设置终端全局代理环境变量
export http_proxy="${PROXY_URL}"
export https_proxy="${PROXY_URL}"
export HTTP_PROXY="${PROXY_URL}"
export HTTPS_PROXY="${PROXY_URL}"
export ftp_proxy="${PROXY_URL}"
export FTP_PROXY="${PROXY_URL}"
export all_proxy="${PROXY_URL}"
export ALL_PROXY="${PROXY_URL}"
export no_proxy="localhost,127.0.0.1,::1"
export NO_PROXY="localhost,127.0.0.1,::1"

# 同时设置Git代理
git config --global http.proxy "${PROXY_URL}"
git config --global https.proxy "${PROXY_URL}"

# 验证设置
echo "✅ 终端全局代理已开启"
echo "HTTP代理: ${http_proxy}"
echo "HTTPS代理: ${https_proxy}"
echo "Git HTTP代理: $(git config --global http.proxy)"
echo "Git HTTPS代理: $(git config --global https.proxy)"

echo ""
echo "💡 提示:"
echo "- 现在所有终端命令都会通过代理进行"
echo "- 如需关闭代理，请运行: source ./proxy-off.sh"
echo "- 代理仅在当前终端会话中有效，新开终端需要重新设置"
echo "- 如需永久设置，请将代理配置添加到 ~/.zshrc 或 ~/.bashrc"