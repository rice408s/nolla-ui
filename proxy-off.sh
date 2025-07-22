#!/bin/bash

# 终端全局代理关闭脚本
# 使用方法: source ./proxy-off.sh 或 . ./proxy-off.sh

echo "🔧 正在关闭终端全局代理..."

# 检查当前代理设置
echo "当前代理设置:"
echo "HTTP代理: ${http_proxy:-未设置}"
echo "HTTPS代理: ${https_proxy:-未设置}"
echo "Git HTTP代理: $(git config --global http.proxy 2>/dev/null || echo '未设置')"
echo "Git HTTPS代理: $(git config --global https.proxy 2>/dev/null || echo '未设置')"

# 清除终端全局代理环境变量
unset http_proxy
unset https_proxy
unset HTTP_PROXY
unset HTTPS_PROXY
unset ftp_proxy
unset FTP_PROXY
unset all_proxy
unset ALL_PROXY
unset no_proxy
unset NO_PROXY

# 清除Git代理设置
git config --global --unset http.proxy 2>/dev/null
git config --global --unset https.proxy 2>/dev/null

echo "✅ 终端全局代理已关闭"
echo ""
echo "💡 提示:"
echo "- 所有代理设置已清除"
echo "- 如需重新开启代理，请运行: source ./proxy-on.sh"
echo "- 代理设置仅在当前终端会话中清除，新开终端不受影响"