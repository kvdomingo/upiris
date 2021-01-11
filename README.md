# UP Iris Photography Website

![UP Iris](http://res.cloudinary.com/kdphotography-assets/image/upload/c_scale,w_256/v1/upirisorg/web/static/web/media/private/logo.png)

![node-current](https://img.shields.io/node/v/react?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/kvdomingo/upirisorg?style=flat-square)


## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- [Node.js](https://nodejs.org/en/) LTS 10 or above
- [Git](https://git-scm.com/)

### Installing
A step by step series of examples that tell you how to get a development env running

1. Install Git, and Node.js (links above).

2. Clone and extract repository to your machine
```shell
> git clone https://github.com/kvdomingo/upirisorg.git
```

3. Checkout a new `develop` branch. **DO NOT** make any modifications directly in the `master` branch. Similarly, 
   **DO NOT** push directly to the `master` branch.
```shell
> git checkout -b develop
```

4. Install remaining prerequisites
```shell
> npm install -D
```

### Deploying locally
Open a terminal and run
```shell
> npm run start
```

Access the local server at `http://localhost:3000`.

## Deployment
```shell
> git add .
> git commit -m <DESCRIPTIVE_COMMIT_MESSAGE>
> git push origin <GITHUB_BRANCH>
```
where `GITHUB_BRANCH` should reflect the type of changes you are implementing (e.g., `feature/some-amazing-new-feature`, `bugfix/crush-critical-bug`).

## CI/CD
- Check the status of the build at [Actions](https://github.com/kvdomingo/upirisorg/actions)

## Contributing
Email us at [upirisorg@gmail.com](mailto:upirisorg.gmail.com).

## Authors
- **Kenneth V. Domingo** - [Email](mailto:hello@kvdomingo.xyz) | [Website](https://kvdomingo.xyz) | [GitHub](https://github.com/kvdomingo)
