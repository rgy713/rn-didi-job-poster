import env from '../../env';

const getApiUri = (uri = '') => `${env.SERVER_URL}/api/v1${uri}`;

export default getApiUri;
