# mysql-api

This will be where I update my solutions for BED Practical 6 onwards :D

<details>
<summary>
    File structure:
    <br>
</summary>
<br>

    mysql-api/
    ┣ src/
    ┃ ┣ api/
    ┃ ┃ ┣ controller/
    ┃ ┃ ┃ ┣ app.js
    ┃ ┃ ┃ ┗ userController.js
    ┃ ┃ ┣ middleware/
    ┃ ┃ ┃ ┣ async.js
    ┃ ┃ ┃ ┗ errHandler.js
    ┃ ┃ ┣ model/
    ┃ ┃ ┃ ┗ user.js
    ┃ ┃ ┗ routes/
    ┃ ┃   ┣ friendRouter.js
    ┃ ┃   ┗ userRouter.js
    ┃ ┣ config/
    ┃ ┃ ┣ .env
    ┃ ┃ ┗ dbConfig.js
    ┃ ┗ server.js
    ┣ .gitignore
    ┣ package.json
    ┣ README.md
    ┗ yarn.lock
    
</details>

## Checklist

- [ ] Add PUT methods for /user/:userid enpoint to edit/update data 
- [ ] Add data validation feature for duplicate entries
- [ ] Add routes for /friends endpoint
- [ ] Reformat code to use async await

## Quick Start

1. Clone repo

```sh
git clone https://github.com/timothyckl/mysql-api
```

2. Install all packages

```sh
yarn install
# or
npm install
```

3. Run server.js

```sh
yarn start
# or
npm start
```





