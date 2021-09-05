const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}
const PROD_CDN_PATH = 'https://cdn.hellobounce.com';

module.exports = {
  /**
   * environment
   */
  environment: process.env.NODE_ENV,
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  /**
   * All sequelize related configs
   */
  database: {
    name: process.env.DB_NAME,
    hostUrl: process.env.DB_HOST_URL,
    queryLogging: process.env.DB_QUERY_LOGGING === 'true',
    dialect: process.env.DB_DIALECT,
    charset: process.env.DB_CHARSET,
    collate: process.env.DB_COLLATE,
    readReplicaHostURL: process.env.DB_READ_REPLICA_HOST_URL,
    userName: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    poolMaxConnections: parseInt(process.env.DB_POOL_MAX_CONNECTIONS),
    poolMinConnections: parseInt(process.env.DB_POOL_MIN_CONNECTIONS),
    poolAcquireTime: parseInt(process.env.DB_POOL_ACQUIRE_TIME),
    poolIdleTime: parseInt(process.env.DB_POOL_IDLE_TIME),
    freezeTableName: process.env.DB_FREEZE_TABLE_NAME,
  },
  tenantDatabase: {
    name: process.env.TENANT_DB_NAME,
    hostUrl: process.env.TENANT_DB_HOST_URL,
    queryLogging: process.env.TENANT_DB_QUERY_LOGGING === 'true',
    dialect: process.env.TENANT_DB_DIALECT,
    charset: process.env.TENANT_DB_CHARSET,
    collate: process.env.TENANT_DB_COLLATE,
    readReplicaHostURL: process.env.TENANT_DB_READ_REPLICA_HOST_URL,
    userName: process.env.TENANT_DB_USER_NAME,
    password: process.env.TENANT_DB_PASSWORD,
    poolMaxConnections: parseInt(process.env.TENANT_DB_POOL_MAX_CONNECTIONS),
    poolMinConnections: parseInt(process.env.TENANT_DB_POOL_MIN_CONNECTIONS),
    poolAcquireTime: parseInt(process.env.TENANT_DB_POOL_ACQUIRE_TIME),
    poolIdleTime: parseInt(process.env.TENANT_DB_POOL_IDLE_TIME),
    freezeTableName: process.env.TENANT_DB_FREEZE_TABLE_NAME,
  },
  mongoDBDatabase: {
    hostUrl: process.env.MONGODB_HOST_URL,
    options: {
      autoIndex: false, // Don't build indexes
      poolSize: 10, // Maintain up to 10 socket connections
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
  },
  elasticSearch: {
    hostUrl: process.env.ELASTICSEARCH_HOST_URL,
    log: 'trace',
    apiVersion: '7.2',
    requestTimeout: 1000,
  },

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  api: {
    prefix: '/v1/activity',
  },

  defaultMaleProfileImage: `${process.env.CDN_BASE_PATH ||
    PROD_CDN_PATH}/icons/profile/male.png`,
  defaultFemaleProfileImage: `${process.env.CDN_BASE_PATH ||
    PROD_CDN_PATH}/icons/profile/female.png`,

  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  darisniNurseryAPI: process.env.DARISNI_NURSERY_API,
  darisniNurseryAPIKey: process.env.DARISNI_NURSERY_API_KEY,

  SSO_BASE_URL: process.env.SSO_BASE_URL,
  defaultPhoto: `${PROD_CDN_PATH}/gravatar/gravatar.png`,

  /* Redis */
  USE_REDIS_SERVER: process.env.USE_REDIS_SERVER,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_HOST: process.env.REDIS_HOST,

  newrelicAppName: process.env.NEWRELIC_APP_NAME,
  newrelicAppLicenseKey: process.env.NEWRELIC_APP_LICENCE_KEY,
};
