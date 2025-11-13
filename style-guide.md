# Content Style Guide

This style guide establishes standards for writing, formatting, and presenting technical documentation. It draws from Diataxis quality principles and Mailchimp content standards.

## Voice and Tone

### Core Principles

Write clear, concise technical content that respects the reader's time and expertise. Our voice remains consistent: direct, professional, technically accurate. Tone adjusts based on context—tutorial content is encouraging, reference material is precise, explanatory content is thorough.

**Do:** Use active voice. Write "The system processes requests" not "Requests are processed by the system."

**Do:** Address readers directly when appropriate. Use "you" in tutorials and how-to guides.

**Don't:** Use jargon without definition. If technical terms are necessary, define them on first use.

**Don't:** Add unnecessary words. Remove qualifiers like "basically," "simply," or "just."

## Content Types

### Tutorials

Learning-oriented content for newcomers. Tutorials guide users through completing a specific project from start to finish.

Structure: Clear steps numbered sequentially. Each step begins with an action verb. Include expected outcomes at each stage.

Example: "1. Install dependencies using `npm install`" not "First, you'll want to maybe install the dependencies."

### How-To Guides

Task-oriented content solving specific problems. Assumes baseline knowledge. Focuses on achieving a goal efficiently.

Structure: State the goal upfront. List prerequisites. Provide steps without excessive explanation. Link to explanatory docs for deeper understanding.

### Reference

Information-oriented content providing technical specifications. Structure mirrors code architecture. Accuracy is paramount.

Structure: Consistent formatting for similar elements. Complete parameter lists. Type information. Return values. Error conditions.

### Explanation

Understanding-oriented content exploring concepts, design decisions, and system behavior. Provides context and deeper knowledge.

Structure: Start with the concept being explained. Provide context. Explain rationale. Include diagrams where helpful. Connect to related concepts.

## Grammar and Mechanics

### Capitalization

Use sentence case for headings. Capitalize proper nouns, product names, and acronyms.

Correct: "Installing Node.js on Linux systems"
Incorrect: "Installing Node.Js On Linux Systems"

### Code Formatting

Inline code uses backticks: `const variable = value`

Code blocks include language specification:

```javascript
function example() {
  return true;
}
```

File paths and commands appear in code format: `src/components/Header.astro`

### Lists

Use numbered lists for sequential steps. Use bulleted lists for unordered items. Keep list items parallel in structure.

Good:
- Install dependencies
- Configure settings
- Run build command

Poor:
- Install dependencies
- You should configure settings
- The build command needs to be run

### Links

Link text describes the destination. Avoid "click here" or "read more."

Good: "See the [Astro configuration documentation](https://docs.astro.build/config)"
Poor: "Click [here](https://docs.astro.build/config) for more information"

## Formatting Standards

### Headings Hierarchy

- H1: Page title (one per page)
- H2: Major sections
- H3: Subsections
- H4: Minor subsections (use sparingly)

Never skip heading levels. Don't use headings for emphasis.

### Callouts

Use callouts to highlight important information:

**Note:** Additional context or clarification
**Warning:** Critical information about potential issues
**Tip:** Helpful suggestions or best practices

### Code Examples

Provide complete, working examples. Include comments explaining non-obvious logic. Show both the code and expected output where relevant.

Prefer realistic examples over foo/bar placeholders. Use meaningful variable names that demonstrate purpose.

## Technical Terminology

### Consistency

Use consistent terms throughout documentation:
- "function" not "method" unless specifically referring to class methods
- "parameter" not "argument" in function definitions
- "directory" not "folder" in technical contexts

### Acronyms and Abbreviations

Define acronyms on first use: "Content Management System (CMS)"

Common technical acronyms don't require definition: API, CLI, CSS, HTML, HTTP, JSON, REST, SQL, URL

### Version Specificity

Include version numbers when behavior varies across versions. Use semantic versioning format: `3.5.2`

Specify version requirements clearly: "Requires Node.js 18.0.0 or higher"

## Accessibility

Write for all readers. Some scan, others read thoroughly. Support both:

- Use descriptive headings
- Front-load important information
- Keep paragraphs focused on single topics
- Break long content into scannable sections
- Provide alternative text for images
- Ensure code examples have adequate contrast

## File Naming Conventions

Documentation files use lowercase with hyphens: `getting-started.md`

Component files use PascalCase: `HeaderNav.astro`

Style files use lowercase with hyphens: `global-styles.css`

Utility files use camelCase: `formatDate.js`

## Maintenance

Review documentation quarterly. Update examples when APIs change. Remove outdated information promptly. Mark deprecated features clearly with migration paths.

Every page should answer: What is this? Why does it matter? How do I use it?