# semanticly.ai Website

A professional Hugo website for semanticly.ai — semantic engineering consulting services.

## Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended version recommended, v0.100.0+)
- Git

### Installing Dependencies

**macOS (Homebrew) - Recommended:**
```bash
# Install all dependencies at once using Brewfile
brew bundle

# Or install Hugo manually
brew install hugo
```

**Windows (Chocolatey):**
```bash
choco install hugo-extended
```

**Linux:**
```bash
snap install hugo
```

## Local Development

### Start the development server

```bash
hugo server -D
```

This starts a local server at `http://localhost:1313` with live reload. The `-D` flag includes draft content.

### Build for production

```bash
hugo --minify
```

Output is generated in the `public/` directory.

## Project Structure

```
semanticly.ai/
├── archetypes/          # Templates for new content
│   ├── blog.md          # Blog post template
│   └── case-studies.md  # Case study template
├── content/             # All site content (Markdown)
│   ├── blog/            # Blog posts
│   ├── case-studies/    # Case study pages
│   ├── resources/       # Resources page
│   ├── services/        # Service pages
│   ├── about.md         # About page
│   ├── contact.md       # Contact page
│   └── privacy.md       # Privacy policy
├── data/                # Data files (YAML/JSON)
│   └── testimonials.yaml
├── layouts/             # Custom layouts & shortcodes
│   └── shortcodes/      # Reusable components
├── static/              # Static assets
│   └── images/          # Images
├── themes/
│   └── semanticly/      # Custom theme
│       ├── assets/      # CSS & JS
│       └── layouts/     # Theme templates
├── hugo.toml            # Site configuration
└── justfile             # Task runner commands
```

## Editing Content

### Creating a new blog post

```bash
hugo new blog/my-new-post.md
```

This uses the template in `archetypes/blog.md`.

### Creating a new case study

```bash
hugo new case-studies/project-name.md
```

### Editing existing content

All content is in the `content/` directory as Markdown files. Edit them directly with any text editor.

**Front matter fields:**
- `title`: Page title
- `description`: Meta description for SEO
- `date`: Publication date
- `tags`: List of tags (for blog posts)
- `draft`: Set to `false` to publish

## Configuration

### Main configuration

Edit `hugo.toml` to change:

- Site title and description
- Contact information
- Social links
- Menu items
- Color scheme (in `[params.colors]`)

### Testimonials

Edit `data/testimonials.yaml` to add or modify testimonials displayed on the home page.

## Placeholders to Replace

Search for these placeholders and replace with your actual values:

| Placeholder | Location | Description |
|-------------|----------|-------------|
| `%CLIENT_NAME%` | `data/testimonials.yaml` | Client names for testimonials |
| `%ROLE%` | `data/testimonials.yaml` | Client roles |
| `%ORGANIZATION%` | `data/testimonials.yaml` | Client organizations |

### Setting up the contact form

1. Create a free account at [Formspree](https://formspree.io)
2. Create a new form and copy the form ID
3. Replace `%FORMSPREE_ID%` in `hugo.toml`

### Adding your photo

Place your headshot at `static/images/nicolas-matentzoglu.jpg` (or update the path in `themes/semanticly/layouts/_default/about.html`).

### Adding a favicon

Replace the placeholder files:
- `static/favicon.svg` - SVG favicon
- `static/favicon.png` - PNG fallback

## Customization

### Colors

Edit the color variables in `hugo.toml`:

```toml
[params.colors]
  primary = "#2c5282"      # Main brand color
  secondary = "#4a5568"    # Secondary color
  accent = "#ed8936"       # Accent/highlight color
```

Or modify CSS custom properties directly in `themes/semanticly/assets/css/main.css`.

### Adding new services

1. Create a new file in `content/services/`:
   ```bash
   hugo new services/new-service.md
   ```
2. Edit the front matter and content
3. Set `weight` to control ordering

### Using shortcodes

**Call to Action:**
```markdown
{{< cta title="Ready to start?" link="/contact" button="Get in Touch" >}}
```

**Testimonial:**
```markdown
{{< testimonial author="Jane Doe" role="Director" org="Example Corp" >}}
The quote text goes here.
{{< /testimonial >}}
```

**Highlight Box:**
```markdown
{{< highlight-box type="info" title="Note" >}}
Important information here.
{{< /highlight-box >}}
```

Types: `info`, `warning`, `success`, `tip`

## Deployment

### GitHub Pages

1. Create a repository on GitHub
2. Push your code
3. Go to Settings → Pages
4. Set source to GitHub Actions
5. Create `.github/workflows/hugo.yml`:

```yaml
name: Deploy Hugo site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.120.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v4
      - name: Build with Hugo
        env:
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: |
          hugo \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v3
```

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `hugo --minify`
4. Set publish directory: `public`
5. Set environment variable: `HUGO_VERSION` = `0.120.0`

### Custom domain

After deployment, configure your DNS:
- For apex domain: Add an A record pointing to your host's IP
- For subdomain: Add a CNAME record pointing to your deployment URL

## Analytics (Optional)

To enable analytics, uncomment and configure in `hugo.toml`:

**Plausible (privacy-friendly):**
```toml
[params]
  plausibleDomain = "semanticly.ai"
```

**Google Analytics:**
```toml
[params]
  googleAnalytics = "G-XXXXXXXXXX"
```

## Support

For questions about this Hugo site template, please open an issue or contact [nico@semanticly.ai](mailto:nico@semanticly.ai).

## License

Content © semanticly.ai. Theme code is available for reference but not for redistribution.
