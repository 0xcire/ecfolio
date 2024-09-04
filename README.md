## EcFolio

8 millionth portfolio site, this time using [`next.js`](https://nextjs.org/)

Based off [this]() Vercel template.

## Features

... that I intend to add

- [ ] Page view count
- [ ] 'StarryNight' component from old portfolio
- [ ] add some old photos
- [ ] analytics for blog and gallery

## Linting & Testing

- Linting this repo is up to the end-user's IDE configuration.
- As such, no `.husky/pre-commit` script exists - config depends on user
- As this repo is coupled with deployment via Vercel, tests ( and also linting ) that I'd typically configure to run in a deployment pipeline are configured to run **locally** before a `git push ...` via `.husky/pre-push`
