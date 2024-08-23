## Alpha - a proving ground for web dev

**This is a playground for testing and trying out web technologies to be deployed as some kind of blog and as a showcase of skills.**

This project is built with NextJS 14 with the following dependencies

1. Shadcn/UI with TailwindCSS (based on RadixUI)
2. Vitest
3. Storybook

Testing is done with Vitest.

Current `ToDos`

-  [x] Setup initial repo
-  [x] Setup initial tooling i.e docker, linters, tests, storybook
-  [ ] create headers
-  [ ] create footers
-  [ ] add content
-  [ ] add animations
-  [ ] add cypress/playwright e2e tests

# Experiments

_In no particular order_

-  [ ] graphs and visualizations
-  [ ] Animations in web dev
-  [ ] deploying e2e live static site
-  [ ] deploying e2e live site with backend
-  [ ] Some kinda full e2e auth for login (BE & FE)
-  [ ] Federated security(BE)
-  [ ] experiments with RabbitMQ/queue systems (Cloud native)
-  [ ] sharding and faceting (DB)
-  [ ] AI and integration to app

# Setup the project

1. install dependencies.

   `npm i`

2. Run your dev instance

   `npm run dev`

##### Storybook

To run Storybook:

`npm run storybook`

# Deployment

This project is deployed with Cloudflare.
Manage Production builds in Cloudflare admin console.
