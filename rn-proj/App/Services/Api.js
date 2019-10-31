import apisauce from 'apisauce'

export default {
  create: (baseURL = "my url") => {
    const api = apisauce.create({
      baseURL: baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer sadf`
      },
      timeout: 100000
    })

    return {
      getUsers: params => api.get('users', params),
    }
  }
}
