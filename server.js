const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

dotenv.config();

const app = express();
// Db connectivity
dbConnection();
app.use(cors());

// Request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/product', require('./routes/productRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));

//API Documentation
if (process.env.NODE_ENV != 'production') {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
}

const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.send('Hello from Node Server!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// Error handler middleware
app.use(function(err, req, res, next){
    console.log(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
})