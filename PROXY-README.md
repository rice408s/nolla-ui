# 终端全局代理使用说明

这个项目包含两个脚本，用于快速开启和关闭终端全局代理，适用于需要通过代理访问网络的场景。

## 脚本文件

- `proxy-on.sh`: 开启终端全局代理
- `proxy-off.sh`: 关闭终端全局代理

## 使用方法

### 重要提示

这些脚本需要使用 `source` 命令执行，而不是直接运行，因为它们需要修改当前终端会话的环境变量。

### 开启代理

```bash
source ./proxy-on.sh
```

或者

```bash
. ./proxy-on.sh
```

### 关闭代理

```bash
source ./proxy-off.sh
```

或者

```bash
. ./proxy-off.sh
```

## 代理配置

默认代理设置为：

- 主机：127.0.0.1
- 端口：7890

如需修改代理设置，请编辑脚本文件中的以下变量：

```bash
PROXY_HOST="127.0.0.1"
PROXY_PORT="7890"
```

## 功能说明

### proxy-on.sh

开启代理脚本会：

1. 设置以下环境变量：
   - http_proxy, HTTP_PROXY
   - https_proxy, HTTPS_PROXY
   - ftp_proxy, FTP_PROXY
   - all_proxy, ALL_PROXY
   - no_proxy, NO_PROXY (localhost和127.0.0.1除外)

2. 同时设置Git全局代理

### proxy-off.sh

关闭代理脚本会：

1. 清除所有代理相关环境变量
2. 清除Git全局代理设置

## 注意事项

- 代理设置仅在当前终端会话中有效，新开终端需要重新设置
- 如需永久设置，请将代理配置添加到 `~/.zshrc` 或 `~/.bashrc` 文件中
- 这些脚本同时设置了Git代理，如果只需要Git代理，可以修改脚本删除环境变量相关部分

## 永久设置方法

如果需要永久设置代理，可以将以下内容添加到 `~/.zshrc` 或 `~/.bashrc` 文件中：

```bash
# 代理设置函数
function proxy_on() {
  export http_proxy="http://127.0.0.1:7890"
  export https_proxy="http://127.0.0.1:7890"
  export all_proxy="http://127.0.0.1:7890"
  export no_proxy="localhost,127.0.0.1,::1"
  git config --global http.proxy "http://127.0.0.1:7890"
  git config --global https.proxy "http://127.0.0.1:7890"
  echo "代理已开启"
}

function proxy_off() {
  unset http_proxy
  unset https_proxy
  unset all_proxy
  unset no_proxy
  git config --global --unset http.proxy
  git config --global --unset https.proxy
  echo "代理已关闭"
}
```

然后，您可以在任何终端中使用 `proxy_on` 和 `proxy_off` 命令来开启和关闭代理。