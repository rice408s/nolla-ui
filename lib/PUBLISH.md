# Nolla UI 发布指南

## 📦 组件库已准备就绪

Nolla UI 组件库已经完成构建配置，可以发布到 npm 供其他项目使用。

## 🚀 发布步骤

### 1. 登录 npm 账户
```bash
npm login
```

### 2. 发布到 npm
```bash
npm publish
```

### 3. 验证发布
发布成功后，可以在 [npmjs.com](https://www.npmjs.com/package/nolla-ui) 查看包信息。

## 📋 发布前检查清单

- ✅ 所有组件已实现并导出
- ✅ TypeScript 类型声明文件已生成
- ✅ 构建产物正常生成（dist/index.js, dist/index.esm.js, dist/index.d.ts）
- ✅ package.json 配置正确
- ✅ README.md 文档完整
- ✅ 本地测试通过

## 📦 包信息

- **包名**: nolla-ui
- **版本**: 1.0.0
- **主入口**: dist/index.js (CommonJS)
- **ES模块入口**: dist/index.esm.js
- **类型声明**: dist/index.d.ts
- **包大小**: ~130KB (压缩后)

## 🔧 使用方式

发布后，用户可以通过以下方式安装和使用：

```bash
# 安装
npm install nolla-ui

# 或使用 yarn
yarn add nolla-ui

# 或使用 pnpm
pnpm add nolla-ui
```

```jsx
// 使用示例
import { Button, Card, Badge } from 'nolla-ui';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Hello Nolla UI</Card.Title>
      </Card.Header>
      <Card.Content>
        <Button variant="primary">Click me</Button>
        <Badge variant="success">New</Badge>
      </Card.Content>
    </Card>
  );
}
```

## 🔄 版本更新

后续更新版本时：

1. 修改 `package.json` 中的版本号
2. 运行 `npm run build` 重新构建
3. 运行 `npm publish` 发布新版本

## 📝 注意事项

- 确保包名 `nolla-ui` 在 npm 上可用（如果已被占用，需要修改包名）
- 首次发布可能需要验证邮箱
- 建议使用语义化版本控制（Semantic Versioning）

## 🎯 下一步

1. **发布到 npm**: 运行 `npm publish` 发布组件库
2. **创建文档站点**: 可以考虑使用 Storybook 或 Docusaurus 创建在线文档
3. **添加测试**: 为组件添加单元测试和集成测试
4. **CI/CD**: 设置自动化构建和发布流程
5. **社区**: 创建 GitHub 仓库，接受社区贡献

---

🎉 **恭喜！Nolla UI 组件库已准备好发布！**