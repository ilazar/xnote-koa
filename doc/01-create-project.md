## 01-create-project

1. Install [Node.js](https://nodejs.org/en/)

2. Create a `package.json` file using [npm-init](https://docs.npmjs.com/cli/init).
```
> npm init
```

3. Install [Koa](http://koajs.com/)
```
> npm install koa --save
```

4. Write `app.js` - see [Koa introduction](http://koajs.com/#introduction)

5. Add `start` script in `package.json`
```
  "scripts": {
    "start": "node src/app.js"
  },
```

6. Start app
```
> npm start
```

7. Test app opening <http://localhost:3000>

8. Install [Mocha](https://mochajs.org/)
```
> npm install koa --save-dev
```

9. Install [Should](https://shouldjs.github.io/)
```
> npm install should --save-dev
```

10. Install [Supertest](https://github.com/visionmedia/supertest)
```
> npm install supertest --save-dev
```

11. Write `app.spec.js` unit tests

12. Add `test` script in `package.json`
```
  "scripts": {
    "start": "node src/app.js",
    "test": "mocha src/**/*.spec.js"
  },
```

13. Run tests
```
> npm test
```
