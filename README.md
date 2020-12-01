NPM commands
* `npm install` installs required packages into `node_modules` directory
* `npm run start` runs a local development server (with auto-reload)
* `npm run build` creates a production-ready build in the `build` directory
* `npm run deploy` pushes the built version to the `master` branch on GitHub

Notes:
1. GitHub Pages uses the master branch for personal web-pages, so I've changed the default branch to `development`.
2. CI has been set up with GitHub Actions, so the page will be deployed when changes are pushed to the development branch of the repo.