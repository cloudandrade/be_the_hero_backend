const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () =>
	console.log('Server running on PORT: ' + PORT)
);
