export default {
    MONGODB: {
        ENVIRONMENT: process.env.NODE_ENV,
        HOST: process.env.DEV_MONGODB_HOST || 'localhost',
        PORT: process.env.DEV_MONGODB_PORT || 27017,
        USERNAME: process.env.DEV_MONGODB_USERNAME || 'dbo-operator',
        USERPWD: process.env.DEV_MONGODB_USERPWD || 'operadorwriteread',
        DATABASE: process.env.DEV_MONGODB_DATABASE || 'dbmtwydm'
    }
}