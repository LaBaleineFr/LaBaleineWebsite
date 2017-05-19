import axios from 'axios';
import ressources from './ressources';

var baleineBotApi = axios.create({
  baseURL: 'https://api.baleine.036.fr'
});

async function getGlossary(){
  const glossary = await baleineBotApi.get('/word-definitions');
  return glossary.data;
}

function getRessources(){
  return ressources;
}

export {
  getGlossary,
  getRessources,
};
