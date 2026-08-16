# Deploy My Locs Thrive Without a Coding Agent

The website does not need a ChatGPT domain or a Netlify coding agent.

The recommended arrangement is:

1. GitHub stores the website source.
2. Netlify builds and hosts the website automatically.
3. Visitors use `mylocsthrive.netlify.app` or the custom domain `mylocsthrive.com` after it is connected.

## Update the existing GitHub repository

Upload the contents of the completed project folder to the existing repository. Preserve the folder structure and keep `package.json`, `pnpm-lock.yaml` and `netlify.toml` in the repository root.

If the Netlify project is already connected to that repository, a change pushed to the main branch should start a normal deployment automatically. This is a standard hosting build, not a coding-agent session.

## Expected Netlify settings

The included `netlify.toml` defines:

1. Build command: `vite build`
2. Publish directory: `dist/client`

Netlify should install the dependencies from `pnpm-lock.yaml` during the build.

## Domain outcome

The deployed website should use one of these addresses:

1. `https://mylocsthrive.netlify.app`
2. `https://mylocsthrive.com` after the custom domain and DNS records are working

No ChatGPT name is added to either domain.

## Deployment verification

After deployment, check:

1. The homepage opens on desktop and mobile.
2. The five resources open from the Resource Hub.
3. The self-check responds to every Yes and Not yet button.
4. The Gentle Starter Guide form records a test email.
5. The PDF download appears after the form succeeds.
6. The Learning Circles form records its test address separately.
7. Privacy, terms, disclaimer, disclosures and contact pages open correctly.
