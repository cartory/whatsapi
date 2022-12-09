const morgan = require('morgan')

const app = require('./src/app')
const port = process.env.PORT || 3000

app
    .use(morgan('dev'))
    .listen(port, () => {
        console.log(new Date())
        console.log(`Server runnning on http://localhost:${port}/`);
    })
