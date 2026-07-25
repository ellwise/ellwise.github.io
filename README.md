# ellwise.github.io

Personal site for [Dr Elliott Wise](https://wiseideas.au), built with [Astro](https://astro.build).

## Develop

```bash
make install
make dev
```

## Check

```bash
make check
```

Pushes to `master` lint, format-check, build, and deploy via [CI/CD](.github/workflows/ci-cd.yml). In repo settings, set **Pages → Build and deployment → Source** to **GitHub Actions**, and set the custom domain under **Pages → Custom domain** (with a corresponding `www` DNS record pointing at `ellwise.github.io`).
