# Surya's Blog

Personal blog built with [Docusaurus 3](https://docusaurus.io/), featuring articles on **technology, philosophy, and various insights**.

---

## 🚀 Features
- 📱 **Responsive design**
- 🌓 **Dark/Light mode toggle**
- 🔍 **Full-text search**
- 📊 **Category-based organization**
- ⚡️ **Fast page loads with optimized performance**

---

## 🛠 Tech Stack
- **Docusaurus 3** – Static site generator  
- **React** – UI components  
- **MDX** – Markdown with JSX support  
- **TypeScript** – Strongly typed development  
- **CSS Modules** – Scoped styling  

---

## 🔧 Prerequisites
- **Node.js** `>=18`
- **Yarn** `>=1.22`

---

## 📌 Getting Started

### **Installation**
```bash
# Clone repository
git clone https://github.com/suryakantamangaraj/Blog.git
cd Blog

# Install dependencies
yarn install
```

---

## 🏗️ Development

- **Start the development server**:
  ```bash
  yarn start
  ```

- **Build for production**:
  ```bash
  yarn build
  ```

- **Serve the production build locally**:
  ```bash
  yarn serve
  ```

---

## 📂 File Structure

```plaintext
Blog/
├── blog/              # Blog posts (Markdown & MDX)
├── src/
│   ├── components/    # Reusable React components
│   ├── css/          # Global styles (CSS Modules)
│   └── pages/        # Static pages (About, Contact, etc.)
├── static/            # Static assets (images, files)
└── docusaurus.config.js  # Docusaurus configuration
```

---

## ✍️ Writing Posts

To add a new blog post:  

1. **Create a new `.md` or `.mdx` file** in the `blog/` directory.  
2. **Add frontmatter** to define metadata:
   ```yaml
   ---
   title: "My First Blog Post"
   date: 2024-01-18
   tags: [Technology, Web Development]
   ---
   ```
3. **Write content** using Markdown.  
4. **Add images** inside the same directory as your post.  

---

## 🚀 Deployment

This blog is **automatically deployed** to **GitHub Pages** using **GitHub Actions**.  

- **Push to the `main` branch** triggers an automatic deployment.

---

## 🤝 Contributing

1. **Fork the repository**  
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add new blog feature"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature/new-feature
   ```
5. **Open a Pull Request** for review.

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---
