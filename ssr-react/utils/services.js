
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


export const fetchEndpoint = (endpoint) => {
  return fetch(endpoint)
    .then(async (res) => {
      let data = await res.json()
      return data
    })
    .catch(async (err) => {
      console.log(`Fallo en URL ${endpoint} : \n`, err)
      return err;
    });
}
