import axios from 'axios';

const URLApi = 'https://tft-api.op.gg/api/v1/na/summoners/';

export async function fetchData(diccionario: Record<string, string>) {
  const fetchedData: Record<string, any> = {};

  for (const summonerName in diccionario) {
    const summonerId = diccionario[summonerName];
    const response = await axios.get(`${URLApi}${summonerId}`);
    fetchedData[summonerName] = response.data.data;
  }

  return fetchedData;
}