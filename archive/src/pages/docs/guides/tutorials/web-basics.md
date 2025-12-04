---
title: Building Your First Website
description: A complete tutorial for creating a simple responsive website from scratch
sidebar:
  order: 1
---

This tutorial guides you through building a complete, responsive website. You'll learn HTML structure, CSS styling, and basic JavaScript interactivity.

## What You'll Build

A single-page portfolio website with:
- Responsive navigation
- Hero section with call-to-action
- Project showcase grid
- Contact form
- Mobile-friendly design

## Prerequisites

- Text editor (VS Code, Sublime Text, or similar)
- Web browser (Chrome, Firefox, or Safari)
- Basic computer skills

No prior coding experience required!

## Step 1: Set Up Your Project

Create a new folder for your project and three files:

```bash
mkdir my-portfolio
cd my-portfolio
touch index.html styles.css script.js
```

Your folder structure should look like:
```
my-portfolio/
├── index.html
├── styles.css
└── script.js
```

## Step 2: Create HTML Structure

Open `index.html` and add this code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <h1>Your Name</h1>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h2>Welcome to My Portfolio</h2>
            <p>I create amazing websites</p>
            <a href="#contact" class="button">Get in Touch</a>
        </section>

        <section id="about">
            <h2>About Me</h2>
            <p>Your bio goes here...</p>
        </section>

        <section id="projects">
            <h2>My Projects</h2>
            <div class="project-grid">
                <div class="project-card">
                    <h3>Project 1</h3>
                    <p>Description of project 1</p>
                </div>
                <div class="project-card">
                    <h3>Project 2</h3>
                    <p>Description of project 2</p>
                </div>
            </div>
        </section>

        <section id="contact">
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

**What this does**: Creates the basic structure with navigation, hero section, projects, and contact form.

## Step 3: Add Styling

Open `styles.css` and add:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

header {
    background: #2c3e50;
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

nav a:hover {
    color: #3498db;
}

main {
    margin-top: 60px;
}

section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

#hero {
    text-align: center;
    padding: 6rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

#hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.button {
    display: inline-block;
    padding: 1rem 2rem;
    background: white;
    color: #667eea;
    text-decoration: none;
    border-radius: 50px;
    margin-top: 2rem;
    font-weight: bold;
    transition: transform 0.3s;
}

.button:hover {
    transform: translateY(-3px);
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    padding: 2rem;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

form {
    max-width: 600px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

input, textarea {
    padding: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 5px;
    font-family: inherit;
}

textarea {
    min-height: 150px;
}

button {
    padding: 1rem 2rem;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
}

button:hover {
    background: #2980b9;
}

footer {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem;
}

@media (max-width: 768px) {
    nav {
        flex-direction: column;
        gap: 1rem;
    }
    
    #hero h2 {
        font-size: 2rem;
    }
    
    .project-grid {
        grid-template-columns: 1fr;
    }
}
```

**What this does**: Styles all elements, adds colors, spacing, and responsive design.

## Step 4: Add Interactivity

Open `script.js` and add:

```javascript
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! (This is a demo)');
    this.reset();
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});
```

**What this does**: Adds smooth scrolling, form handling, and scroll effects.

## Step 5: Test Your Site

1. Open `index.html` in your web browser
2. Test all navigation links
3. Try the contact form
4. Resize your browser to test responsive design

## What You Learned

- HTML document structure
- CSS layout with Flexbox and Grid
- Responsive design with media queries
- Basic JavaScript interactivity
- Form handling

## Next Steps

- Add more projects to your portfolio
- Customize colors and fonts
- Add images to project cards
- Learn about hosting your site

Continue learning with:
- [Advanced CSS Techniques](/docs/guides/tutorials/advanced-css/)
- [JavaScript Fundamentals](/docs/guides/tutorials/javascript-basics/)
- [Deploying Your Website](/docs/guides/how-to/deploy-site/)