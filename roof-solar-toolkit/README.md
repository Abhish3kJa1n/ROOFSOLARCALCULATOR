# Roof & Solar Toolkit — static site

This folder is for the separate static site developed for the Roof & Solar Toolkit project. The Vite/TanStack application at the repository root is not changed.

Upload the clean archive here as `roof_solar_toolkit_github_source.zip`.

## Cloudflare Pages configuration

- Branch: `assistant-static-toolkit`
- Root directory: `roof-solar-toolkit`
- Framework: None
- Build command: `unzip -q -o roof_solar_toolkit_github_source.zip -d . && sh scripts/prepare_deploy.sh`
- Output directory: `dist`
- No npm install or Node build step is needed.

The archive expands the static pages, assets and Pages Functions into this folder. The build script writes only public website files into `dist/`; the Functions directory remains at this folder's root.

## Pre-launch

The site intentionally remains `noindex`. Do not remove that setting until the owner, legal, editorial, professional review, live API and browser-testing gates are complete. Configure the D1 quota binding and server-side provider secrets in Cloudflare settings, never in source files. No local city prices are approved for publication yet.
