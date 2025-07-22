<div align="center">

# 🎨 Nolla UI

**一个现代化的React组件库，专为AI应用设计**

[![npm version](https://img.shields.io/npm/v/nolla-ui.svg?style=flat-square)](https://www.npmjs.com/package/nolla-ui)
[![npm downloads](https://img.shields.io/npm/dm/nolla-ui.svg?style=flat-square)](https://www.npmjs.com/package/nolla-ui)
[![license](https://img.shields.io/npm/l/nolla-ui.svg?style=flat-square)](https://github.com/rice408s/nolla-ui/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-Ready-38bdf8.svg?style=flat-square)](https://tailwindcss.com/)

[📖 文档](https://nolla-ui.vercel.app) • [🎮 在线演示](https://nolla-ui.vercel.app) • [📦 NPM](https://www.npmjs.com/package/nolla-ui) • [🐛 报告问题](https://github.com/rice408s/nolla-ui/issues)

</div>

---

## ✨ 特性

<table>
<tr>
<td>

🎨 **现代设计**
> 简洁、优雅的扁平化设计风格

</td>
<td>

⚡ **高性能**
> 优化的构建产物，最小化包体积

</td>
</tr>
<tr>
<td>

🔧 **高度可定制**
> 基于Tailwind CSS，易于定制主题

</td>
<td>

♿ **无障碍访问**
> 遵循WCAG指南，支持键盘导航

</td>
</tr>
<tr>
<td>

🌙 **暗色模式**
> 内置暗色主题支持

</td>
<td>

📱 **响应式**
> 完全响应式设计，适配各种设备

</td>
</tr>
<tr>
<td>

🎯 **TypeScript**
> 完整的类型定义支持

</td>
<td>

🚀 **开箱即用**
> 零配置，快速上手

</td>
</tr>
</table>

## 🚀 快速开始

### 安装

```bash
# npm
npm install nolla-ui

# yarn
yarn add nolla-ui

# pnpm
pnpm add nolla-ui
```

### 使用

```tsx
// 1. 导入样式
import 'nolla-ui/dist/index.css';

// 2. 导入组件
import { Button, Input, Card } from 'nolla-ui';

function App() {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-4">欢迎使用 Nolla UI</h1>
      <Input placeholder="请输入内容..." className="mb-4" />
      <Button variant="primary">提交</Button>
    </Card>
  );
}
```

## 📦 组件库

<details>
<summary><strong>🧱 基础组件</strong></summary>

- **Button** - 按钮组件，支持多种样式和尺寸
- **Input** - 输入框组件，支持标签和错误提示
- **Card** - 卡片容器组件
- **Badge** - 徽章组件，用于状态标识
- **Avatar** - 头像组件，支持图片和文字

</details>

<details>
<summary><strong>📝 表单组件</strong></summary>

- **Switch** - 开关组件
- **Checkbox** - 复选框组件
- **Radio** - 单选框组件
- **Select** - 下拉选择组件

</details>

<details>
<summary><strong>💬 反馈组件</strong></summary>

- **Alert** - 警告提示组件
- **Modal** - 模态框组件
- **Tooltip** - 工具提示组件
- **Progress** - 进度条组件

</details>

<details>
<summary><strong>🧭 导航组件</strong></summary>

- **Tabs** - 标签页组件
- **Dropdown** - 下拉菜单组件

</details>

## 🎨 主题定制

### CSS 变量

```css
:root {
  --primary: 220 100% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 220 14.3% 95.9%;
  --secondary-foreground: 220.9 39.3% 11%;
  /* 更多变量... */
}
```

### Tailwind 配置

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        }
      }
    }
  }
}
```

## 🌙 暗色模式

```tsx
// 切换暗色模式
document.documentElement.classList.toggle('dark');
```

## 📊 浏览器支持

| Chrome | Firefox | Safari | Edge |
|--------|---------|--------| ---- |
| ≥ 88   | ≥ 85    | ≥ 14   | ≥ 88 |

## 🛠️ 开发

```bash
# 克隆仓库
git clone https://github.com/rice408s/nolla-ui.git

# 安装依赖
cd nolla-ui
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 发布
npm run build && npm publish
```

## 🤝 贡献

我们欢迎所有形式的贡献！

1. 🍴 Fork 这个仓库
2. 🔀 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 💾 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 📤 推送到分支 (`git push origin feature/AmazingFeature`)
5. 🔃 打开一个 Pull Request

### 开发指南

- 遵循现有的代码风格
- 添加适当的测试
- 更新相关文档
- 确保所有测试通过

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源。

## 🙏 致谢

感谢以下开源项目的启发：

- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的CSS框架
- [Radix UI](https://www.radix-ui.com/) - 无样式的UI组件
- [Shadcn/ui](https://ui.shadcn.com/) - 设计灵感来源

## 📈 更新日志

### v1.0.0 (2024-01-01)
- 🎉 首次发布
- ✨ 包含17个基础组件
- 🎨 扁平化设计风格
- 🌙 暗色模式支持
- 📱 响应式设计

---

<div align="center">

**如果这个项目对你有帮助，请给它一个 ⭐️**

[⬆ 回到顶部](#-nolla-ui)

</div>
