const currentEnv = 'dev';
const envs = {
  dev: {
    // SERVER_URL: 'https://localhost:3001',
    // SERVER_URL: 'http://3.93.58.5:3000',
    SERVER_URL: 'http://192.168.0.102:3000',
    // SERVER_URL: 'http://3.93.58.5:3000',
    // SERVER_URL: 'http://192.168.1.68:3000',
  },
  prod: {
    SERVER_URL: '',
  },
};

export default envs[currentEnv];
