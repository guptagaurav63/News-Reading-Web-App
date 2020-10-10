const env = process.env.NODE_ENV || 'development';

export const configs = {
  development: {
    apiUrl: 'https://newsapi.org/v1',
    newsApiKey: '12a98f5a24da4d52818c623300c112f0',
  },
  production: {
    apiUrl: 'https://newsapi.org/v1',
    newsApiKey: '12a98f5a24da4d52818c623300c112f0',
  },
}[env];
