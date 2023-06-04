const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userRoutes');
const cors = require('cors');
//const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header'); 
require('dotenv').config();
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data, err) => {
    if (data) {
      console.log('connected sucessfully');
    }
    if (err) {
      console.log(err);
    }
  });
app.use(cors({
  origin:"http://localhost:3000"
}));   
/*app.use(
  expressCspHeader({
    directives: {
      'default-src': [SELF],
      'connect-src': [SELF, 'http://localhost:3000'],
      'script-src': [SELF, INLINE, '*'],
      'style-src': [SELF, '*'],
      'img-src': ['data:', '*'],
      'worker-src': [NONE],
      'block-all-mixed-content': false,
    },
  })
);
 */
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/api', userRoute);

if (process.env.NODE_ENV == 'production') {
  console.log('production mode active');
} else {
  console.log('devv mode');
  app.get('/', (req, res) => {
    res.send('api running');
  });
}

app.listen(process.env.PORT || 4001, () => {
  console.log(`server listineang on port ${process.env.PORT}`);
});
