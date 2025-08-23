# Testo Frontend Coding Challenge

这是一个基于 Next.js 和 StoryBlok 的前端项目，用于展示和渲染 StoryBlok CMS 中的内容。

## 项目结构

```
src/
├── components/           # React 组件
│   ├── DefaultPage.js   # 默认页面组件，显示页面元数据和内容
│   ├── Button.js        # 按钮组件，支持多种样式和尺寸
│   ├── Text.js          # 富文本组件，支持多种文本格式
│   ├── image-text-section.js  # 图文组合组件
│   └── ...              # 其他组件
├── pages/               # Next.js 页面
│   ├── _app.js         # 应用入口，注册 StoryBlok 组件
│   ├── index.js        # 首页，获取 coding-challenge 内容
│   └── [...slug].tsx   # 动态路由页面
└── styles/              # 样式文件
    └── globals.css      # 全局样式
```

## 主要功能

### 1. DefaultPage 组件

- 显示页面标题和元数据（创建时间、发布时间、更新时间、ID、Slug）
- 使用 `StoryblokComponent` 渲染 `body` 中的嵌套组件
- 支持响应式布局和美观的样式

### 2. Button 组件

- 支持多种按钮颜色：primary、secondary、success、danger
- 支持多种按钮尺寸：small、medium、large
- 支持多种按钮样式：default、outline、ghost
- 自动处理链接和样式类

### 3. Text 组件

- 支持富文本内容渲染
- 处理段落、标题、列表等块级元素
- 支持文本样式：粗体、斜体、下划线、颜色
- 支持换行符和特殊格式

### 4. ImageTextSection 组件

- 支持图文组合布局
- 可配置图片位置（左侧或右侧）
- 支持背景颜色配置
- 集成 Button 和 Text 组件

## StoryBlok 数据结构支持

项目支持以下 StoryBlok 数据结构：

```json
{
  "name": "页面标题",
  "created_at": "创建时间",
  "published_at": "发布时间",
  "updated_at": "更新时间",
  "id": "页面ID",
  "slug": "页面标识",
  "content": {
    "body": [
      {
        "component": "image-text-section",
        "headline": "标题（富文本）",
        "text": "正文内容（富文本）",
        "image": "图片信息",
        "button": "按钮数组",
        "image_layout": "图片布局",
        "reverse_layout": "是否反转布局",
        "background_color": "背景颜色"
      }
    ]
  }
}
```

## 使用方法

1. 确保已安装依赖：

   ```bash
   npm install
   ```

2. 启动开发服务器：

   ```bash
   npm run dev
   ```

3. 访问 `http://localhost:3000` 查看 coding-challenge 页面

## 技术栈

- **Next.js** - React 框架
- **StoryBlok** - Headless CMS
- **Tailwind CSS** - 样式框架
- **TypeScript** - 类型支持（部分文件）

## 组件注册

所有组件都在 `src/pages/_app.js` 中注册，确保 StoryBlok 能够正确识别和渲染：

```javascript
const components = {
  "default-page": DefaultPage,
  "image-text-section": ImageTextSection,
  button: Button,
  text: Text,
  // ... 其他组件
};
```

## 样式特点

- 使用 Tailwind CSS 实现响应式设计
- 支持深色/浅色主题
- 现代化的 UI 设计
- 良好的可访问性支持
- 移动端友好的布局
