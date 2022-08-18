const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./src/routes/user');
const permissionsRoutes = require('./src/routes/permissions');
const userPermissionsRouter = require('./src/routes/user-permissions');

const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(cors());

app.use('/users', userRoutes);
app.use('/permissions', permissionsRoutes);
app.use('/user-permission', userPermissionsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
