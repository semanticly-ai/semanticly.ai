# justfile for semanticly.ai Hugo site
# Install just: https://github.com/casey/just

# Default recipe - show available commands
default:
    @just --list

# Start development server with drafts
dev:
    hugo server -D --navigateToChanged

# Start development server (production mode, no drafts)
serve:
    hugo server --navigateToChanged

# Build site for production
build:
    hugo --minify

# Build and show stats
build-stats:
    hugo --minify --templateMetrics --templateMetricsHints

# Clean build artifacts
clean:
    rm -rf public/ resources/_gen/

# Create a new blog post
new-post name:
    hugo new blog/{{name}}.md

# Create a new case study
new-case-study name:
    hugo new case-studies/{{name}}.md

# Create a new service page
new-service name:
    hugo new services/{{name}}.md

# Check for broken links (requires htmltest)
check-links: build
    htmltest

# Validate HTML (requires html5validator)
validate: build
    html5validator --root public/

# Deploy to local public folder and open
preview: build
    open public/index.html

# Show site structure
tree:
    @echo "Content structure:"
    @find content -name "*.md" | head -20
    @echo ""
    @echo "Theme layouts:"
    @find themes/semanticly/layouts -name "*.html" | head -20

# Update Hugo (macOS)
update-hugo:
    brew upgrade hugo

# Format all markdown files (requires prettier)
format:
    prettier --write "content/**/*.md"

# Check for placeholder values that need replacing
check-placeholders:
    @echo "Checking for placeholders..."
    @grep -r "%.*%" content/ hugo.toml data/ 2>/dev/null || echo "No placeholders found!"

# Run all checks before deployment
preflight: build check-placeholders
    @echo "✓ Build successful"
    @echo "✓ Ready for deployment"
