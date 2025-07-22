#!/bin/bash

# 代理脚本安装脚本
# 将代理脚本安装到家目录并设置别名

echo "🔧 开始安装代理脚本..."

# 定义目录和文件路径
PROXY_DIR="$HOME/.proxy-scripts"
CURRENT_DIR="$(pwd)"
SHELL_RC="$HOME/.zshrc"

# 检测shell类型
if [ -f "$HOME/.bashrc" ]; then
    SHELL_RC="$HOME/.bashrc"
elif [ -f "$HOME/.bash_profile" ]; then
    SHELL_RC="$HOME/.bash_profile"
fi

echo "📁 创建代理脚本目录: $PROXY_DIR"
# 创建目录
mkdir -p "$PROXY_DIR"

echo "📋 复制代理脚本文件..."
# 复制脚本文件
cp "$CURRENT_DIR/proxy-on.sh" "$PROXY_DIR/"
cp "$CURRENT_DIR/proxy-off.sh" "$PROXY_DIR/"
cp "$CURRENT_DIR/PROXY-README.md" "$PROXY_DIR/"

echo "🔐 设置脚本执行权限..."
# 设置执行权限
chmod +x "$PROXY_DIR/proxy-on.sh"
chmod +x "$PROXY_DIR/proxy-off.sh"

echo "⚙️ 配置别名..."
# 检查是否已经存在别名
if ! grep -q "# Proxy Scripts Aliases" "$SHELL_RC" 2>/dev/null; then
    echo "" >> "$SHELL_RC"
    echo "# Proxy Scripts Aliases" >> "$SHELL_RC"
    echo "alias proxy-on='$PROXY_DIR/proxy-on.sh'" >> "$SHELL_RC"
    echo "alias proxy-off='$PROXY_DIR/proxy-off.sh'" >> "$SHELL_RC"
    echo "alias pxon='$PROXY_DIR/proxy-on.sh'" >> "$SHELL_RC"
    echo "alias pxoff='$PROXY_DIR/proxy-off.sh'" >> "$SHELL_RC"
    echo "✅ 别名已添加到 $SHELL_RC"
else
    echo "⚠️ 别名已存在，跳过添加"
fi

echo ""
echo "🎉 代理脚本安装完成！"
echo ""
echo "📍 安装位置: $PROXY_DIR"
echo "📝 配置文件: $SHELL_RC"
echo ""
echo "🔄 请运行以下命令重新加载配置:"
echo "   source $SHELL_RC"
echo ""
echo "💡 可用的别名命令:"
echo "   proxy-on  或 pxon   - 开启代理"
echo "   proxy-off 或 pxoff  - 关闭代理"
echo ""
echo "📖 查看详细说明: cat $PROXY_DIR/PROXY-README.md"