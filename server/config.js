const config = {
  //mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/wed-site',
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:admin1234@ds125526.mlab.com:25526/wed-site-v1',
  port: process.env.PORT || 8000,
};

export const testGuestId = '5c3f3af3c88fdf27d4522134';

export default config;