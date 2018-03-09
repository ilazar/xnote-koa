## 02-create-rest-service

- Note resource having id: string, text: string, version: number

1. Configure ES6

- Install [Backpack](https://www.npmjs.com/package/backpack-core)
- Install [babel es2015 preset](https://babeljs.io/docs/plugins/preset-es2015/)
```
> npm install backpack-core --save-dev
> npm install babel-preset-es2015 --save-dev
```
- Add `.babelrc` file with the content `{ "presets": ["es2015"] }`
- Modify `package.json` scripts
```
  "scripts": {
    "test": "mocha --compilers js:babel-core/register src/**/*.spec.js",
    "dev": "backpack dev",
    "build": "backpack build"
  },
```
- Use `npm run dev` to run app
- Use `npm run build` to build app
 
2. Install [koa-router](https://github.com/alexmingoia/koa-router)
```
> npm install koa-router --save
```

3. Install [koa-bodyparser](https://github.com/koajs/bodyparser)
```
> npm install koa-bodyparser --save
```

4. Install [nedb-promise](https://github.com/jrop/nedb-promise)
```
> npm install nedb-promise --save
```

5. Configure app middlewares - see `index.js`
- exception handler
- timing logger
- body parser

6. Create a basic router - see `note` folder
- search: get all
- read: get by id
- create: post
- update: put
- delete: del