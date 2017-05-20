import axios from 'axios';
import ressources from './ressources';
import team from './team';

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

function getTeamMembers(){
  return team;
}

export {
  getGlossary,
  getRessources,
  getTeamMembers,
};
