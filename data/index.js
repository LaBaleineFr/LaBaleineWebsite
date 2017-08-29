import axios from 'axios';
import ressources from './ressources';
import teamMembers from './teamMembers';
import projects from './projects';

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
  return teamMembers;
}

function getProjects() {
  return projects;
}

export {
  getGlossary,
  getRessources,
  getTeamMembers,
  getProjects,
};
