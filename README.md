# Meng Liang — Personal Portfolio & Professional Website

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen)
![Last Updated](https://img.shields.io/github/last-commit/mengliang10/mengliang10.github.io)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fmengliang10.github.io)

A modern, responsive personal portfolio website showcasing Meng Liang's professional experience as a Fractional CMO & Performance Marketing Leader. This single-page application features interactive navigation, detailed professional sections, and a clean design optimized for both desktop and mobile devices.

## 🌐 Live Website
**URL:** https://mengliang10.github.io

## 📱 Website Structure & Flow

### **Navigation Menu**
The website features a fixed navigation bar with the following sections:
1. **Fractional Work** - Professional services and offerings
2. **Resume** - Professional experience and education
3. **Portfolio** - Selected work and case studies
4. **Blog** - Latest articles and insights
5. **Contact** - Get in touch
6. **GitHub** - Direct link to GitHub profile

### **Section Details**

#### **1. Fractional Work**
- **Overview**: Introduction to fractional marketing leadership services
- **Services Offered**:
  - **Fractional CMO**: Part-time senior marketing leadership
  - **Performance Marketing Leadership**: Paid media expertise across Google, Meta, DV360
  - **MarTech Strategy & Stack Build**: Platform selection and integration
  - **CRM & Loyalty Programme Design**: Segmentation and automation architecture

#### **2. Resume**
- **Professional Experience**:
  - VP Global Digital Marketing & Distribution — Frasers Hospitality (2018-2024)
  - Director Digital Marketing — Frasers Hospitality (2016-2018)
  - Senior Manager Digital Marketing — Frasers Hospitality (2014-2016)
  - Manager Digital Marketing — Frasers Hospitality (2012-2014)
  - Senior Executive Digital Marketing — Frasers Hospitality (2010-2012)
  - Executive Digital Marketing — Frasers Hospitality (2008-2010)
  - Management Trainee — Frasers Hospitality (2007-2008)
- **Education**:
  - BSc (Hons) Business Management — University of London
  - Diploma in Hospitality & Tourism Management — Singapore Polytechnic

#### **3. Portfolio**
- Showcases selected projects and case studies
- Interactive gallery with detailed descriptions
- Visual examples of work and achievements

#### **4. Blog**
- Latest articles and professional insights
- Integration with external publishing platforms
- Thought leadership content

#### **5. Contact**
- Contact information and location (Singapore)
- LinkedIn profile integration
- Professional networking options

## 🛠️ Technical Implementation

### **Frontend Stack**
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Custom styling with CSS variables for theming
- **JavaScript**: Interactive navigation and dynamic content loading
- **Ionicons**: Icon library for UI elements
- **Google Fonts**: Poppins font family for typography

### **Key Features**
- **Responsive Design**: Fully responsive across all device sizes
- **Single Page Application**: Smooth transitions between sections
- **Interactive Navigation**: Highlight active section with smooth scrolling
- **Modern UI Components**: Cards, timelines, modals, and galleries
- **Performance Optimized**: Optimized images and assets

### **File Structure**
```
mengliang10.github.io/
├── index.html              # Main HTML file
├── README.md              # This documentation
├── LICENSE               # MIT License
├── assets/               # Static assets
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   └── images/          # Images and icons
│       ├── my-avatar.jpeg
│       ├── icon-*.svg
│       ├── logo-*.png
│       └── portfolio images
├── .github/             # GitHub configuration
└── website-demo-image/  # Website preview images
```

## 🚀 Deployment

### **GitHub Pages**
This website is automatically deployed via GitHub Pages:
- **Branch**: `main`
- **Source**: Root directory
- **URL**: `https://mengliang10.github.io`

### **Local Development**
To run locally:
```bash
# Clone the repository
git clone https://github.com/mengliang10/mengliang10.github.io.git

# Navigate to the directory
cd mengliang10.github.io

# Open in browser (no build process required)
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## 📝 Content Management

### **Updating Content**
1. **Profile Information**: Edit `index.html` directly
2. **Images**: Replace files in `assets/images/`
3. **Styling**: Modify `assets/css/style.css`
4. **Portfolio Items**: Update portfolio section in `index.html`

### **Adding New Sections**
The website uses a modular section system. To add a new section:
1. Add navigation item in the navbar
2. Create new `<article>` element with `data-page` attribute
3. Implement corresponding JavaScript if needed

## 🔧 Customization

### **Theming**
CSS variables in `style.css` control the color scheme:
```css
:root {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --accent-color: #ff6b35;
  /* ... other variables */
}
```

### **Adding New Portfolio Items**
Edit the portfolio section in `index.html`:
```html
<li class="project-item active" data-filter-item data-category="category">
  <a href="#">
    <figure class="project-img">
      <img src="assets/images/project-image.jpg" alt="Project" loading="lazy">
    </figure>
    <h3 class="project-title">Project Title</h3>
    <p class="project-category">Category</p>
  </a>
</li>
```

## 📊 Performance & SEO

### **Optimizations**
- **Image Optimization**: Compressed images for faster loading
- **Lazy Loading**: Images load as needed
- **Minimal Dependencies**: No heavy frameworks
- **Semantic HTML**: Improved accessibility and SEO

### **SEO Features**
- Meta tags for description and viewport
- Semantic HTML structure
- Open Graph meta tags for social sharing
- Favicon and touch icons

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Website**: https://mengliang10.github.io
- **GitHub**: [@mengliang10](https://github.com/mengliang10)
- **LinkedIn**: [mengliang](https://www.linkedin.com/in/mengliang/)

---

**Last Updated**: April 2024  
**Maintained by**: Meng Liang  
**Purpose**: Professional portfolio and contact hub