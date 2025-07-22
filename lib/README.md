# Nolla UI

一个现代化的React组件库，专为AI应用设计，采用TypeScript和Tailwind CSS构建。

## 特性

- 🎨 **现代设计** - 简洁、优雅的扁平化设计风格
- ⚡ **高性能** - 优化的构建产物，最小化包体积
- 🔧 **高度可定制** - 基于Tailwind CSS，易于定制主题
- ♿ **无障碍访问** - 遵循WCAG指南，支持键盘导航
- 🌙 **暗色模式** - 内置暗色主题支持
- 📱 **响应式** - 完全响应式设计，适配各种设备
- 🎯 **TypeScript** - 完整的类型定义支持

## 安装

```bash
npm install nolla-ui
# 或
yarn add nolla-ui
# 或
pnpm add nolla-ui
```

## 快速开始

### 1. 导入样式

在你的应用入口文件中导入Nolla UI的样式：

```tsx
// main.tsx 或 App.tsx
import 'nolla-ui/dist/index.css';
```

### 2. 使用组件

```tsx
import React from 'react';
import { Button, Input, Card } from 'nolla-ui';

function App() {
  return (
    <div className="p-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">欢迎使用 Nolla UI</h1>
        <Input 
          placeholder="请输入内容..." 
          className="mb-4"
        />
        <Button variant="primary">
          提交
        </Button>
      </Card>
    </div>
  );
}

export default App;
```

## 组件列表

### 基础组件
- **Button** - 按钮组件，支持多种样式和尺寸
- **Input** - 输入框组件，支持标签和错误提示
- **Card** - 卡片容器组件
- **Badge** - 徽章组件，用于状态标识
- **Avatar** - 头像组件，支持图片和文字

### 表单组件
- **Switch** - 开关组件
- **Checkbox** - 复选框组件
- **Radio** - 单选框组件
- **Select** - 下拉选择组件
- **Slider** - 滑块组件

### 反馈组件
- **Alert** - 警告提示组件
- **Modal** - 模态框组件
- **Tooltip** - 工具提示组件
- **Progress** - 进度条组件

### 导航组件
- **Tabs** - 标签页组件
- **Dropdown** - 下拉菜单组件

## 主题定制

Nolla UI 基于 Tailwind CSS 构建，你可以通过以下方式定制主题：

### 1. CSS 变量

```css
:root {
  --primary: 220 100% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 220 14.3% 95.9%;
  --secondary-foreground: 220.9 39.3% 11%;
  /* 更多变量... */
}
```

### 2. Tailwind 配置

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

## 暗色模式

Nolla UI 内置暗色模式支持，通过 `dark` 类名切换：

```tsx
// 切换暗色模式
document.documentElement.classList.toggle('dark');
```

## TypeScript 支持

Nolla UI 提供完整的 TypeScript 类型定义：

```tsx
import { ButtonProps, InputProps } from 'nolla-ui';

interface MyComponentProps {
  buttonProps: ButtonProps;
  inputProps: InputProps;
}
```

## 浏览器支持

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

## 开发

```bash
# 克隆仓库
git clone https://github.com/yourusername/nolla-ui.git

# 安装依赖
cd nolla-ui
npm install

# 开发模式
npm run dev

# 构建
npm run build
```

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

### v1.0.0
- 🎉 首次发布
- ✨ 包含17个基础组件
- 🎨 扁平化设计风格
- 🌙 暗色模式支持
- 📱 响应式设计