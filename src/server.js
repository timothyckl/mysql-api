// entry point
const app = require('./api/controller/app');
require('dotenv').config({ path: '/home/tim/Desktop/mysql-api/src/config/.env' })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});