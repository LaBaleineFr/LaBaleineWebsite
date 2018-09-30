import axios from 'axios';
import ressources from './ressources';
import projects from './projects';
import partners from './partners';

var baleineBotApi = axios.create({
  baseURL: 'https://api.labaleine.gg/'
});

async function getGlossary(){
  const glossary = await baleineBotApi.get('/word-definitions');
  return glossary.data;
}

function getRessources(){
  return ressources;
}

function getProjects() {
  return projects;
}

function getPartners() {
  return partners;
}

export {
  getGlossary,
  getRessources,
  getProjects,
  getPartners,
};
