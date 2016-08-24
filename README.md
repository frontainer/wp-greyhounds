# wp-greyhounds

greyhounds wordpress template 

Please read "greyhounds" README.md

[greyhounds](https://github.com/frontainer/greyhounds)

## Required

[Node.js](https://nodejs.org/en/)
[Docker for Mac](https://docs.docker.com/docker-for-mac/) or [Docker for Windows](https://docs.docker.com/docker-for-windows/)

## Usage

Install greyhounds cli.

```
npm install greyhounds -g
```

Create project

```
ghs my_app --preset wp
```

## Command

- `npm run build`: Build all files.
- `npm run watch`: Setup web server, Watch all files update.
- `npm start`: `npm run watch`'s alias.
- `npm test`: Execute unit testing
- `npm production`: Generate files for production use. 