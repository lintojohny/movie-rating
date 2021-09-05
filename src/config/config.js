const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

module.exports = {
  /**
   * environment
   */
  environment: process.env.NODE_ENV,
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  mongoDBDatabase: {
    hostUrl: process.env.MONGODB_HOST_URL,
    options: {
      autoIndex: false, // Don't build indexes
      poolSize: 10, // Maintain up to 10 socket connections
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  },
};
