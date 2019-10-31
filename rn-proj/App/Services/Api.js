import apisauce from 'apisauce'

import getEnvVars from '../../environment';

const { apiUrl, sessionToken } = getEnvVars();

export default {
  create: (baseURL = apiUrl) => {
    const api = apisauce.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
        'session-token': sessionToken
      },
      timeout: 10 * 1000 // timeout of 10s
    })

    return {
      getUsers: _ => api.get('users'),
    }
  }
}
