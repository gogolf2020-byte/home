# Wellness Spring - AI-Integrated Acupuncture & Holistic Health

一个基于 Vite、React 和 Tailwind CSS 的现代化医疗养生网站，展示了 AI 集成的针灸和整体健康服务。

## 🚀 项目特性

- **现代技术栈**: Vite + React + Tailwind CSS
- **响应式设计**: 完全适配移动、平板和桌面设备
- **快速加载**: Vite 的闪电级快速开发体验
- **组件化架构**: 模块化的 React 组件结构
- **优雅样式**: 使用 Tailwind CSS 实现美观的设计

## 📋 页面结构

- **Header** - 导航栏，支持移动端菜单
- **Hero** - 首屏展示区
- **About** - 关于我们和服务介绍
- **AI Assessment** - AI 健康评估说明
- **Practitioner** - 医生介绍
- **Testimonials** - 患者推荐
- **Contact** - 联系和预约表单
- **Footer** - 页脚信息

## 🛠️ 安装和运行

### 前置条件
- Node.js (v16 或更高版本)
- npm 或 yarn

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 开发模式
```bash
npm run dev
# 或
yarn dev
```

访问 `http://localhost:5173` 查看应用。

### 生产构建
```bash
npm run build
# 或
yarn build
```

构建后的文件会生成在 `dist/` 目录中。

### 预览生产构建
```bash
npm run preview
# 或
yarn preview
```

## 📁 项目结构

```
wellness-spring/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── AIAssessment.jsx
│   │   ├── Practitioner.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 定制

### 颜色配置
在 `tailwind.config.js` 中修改颜色主题：
```javascript
colors: {
  primary: '#1a472a',      // 深绿色
  secondary: '#2d5a3d',    // 中等绿色
  accent: '#4a7c5e',       // 浅绿色
}
```

### 内容修改
- 修改各个组件文件（在 `src/components/` 目录中）
- 更新文本内容、颜色、图片等

## 📱 浏览器兼容性

支持所有现代浏览器：
- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 📝 TODO

- [ ] **ACC (Accident Compensation Corporation) 流程整合与申请支持**:
  - 完善 ACC 针灸理赔与损伤报销相关的在线申报指引与资质信息展示。
  - 优化 ACC 理赔所需信息（如 ACC 案号 Claim Number、事故日期 Date of Injury）在预约与联系表单中的集成。

## 📞 联系信息

- 电话: 021 101 8892
- 邮箱: info@wellness-spring.co.nz
- WhatsApp: +64 21 101 8892

## 📄 许可证

All rights reserved © 2026 Wellness Spring

---

Built with ❤️ using Vite, React, and Tailwind CSS

