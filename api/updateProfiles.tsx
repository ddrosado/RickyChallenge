import axios from 'axios';

const URLApi = 'https://tft-api.op.gg/api/v1/na/summoners/';

export async function renewProfiles(diccionario: Record<string, string>) {
  for (const summonerName in diccionario) {
    const summonerId = diccionario[summonerName];
    try {
      const response = await axios.post(`${URLApi}${summonerId}/renew`, null, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data); 
    } catch (error) {
      console.error('Error renewing profile:', error);
    }
  }
}