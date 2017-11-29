import axios from 'axios';
import ressources from './ressources';
import teamMembers from './teamMembers';
import projects from './projects';
import miningPools from './miningPools';
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

function getTeamMembers(){
  return teamMembers;
}

function getProjects() {
  return projects;
}

function getMiningPools() {
  return miningPools;
}

function getPartners() {
  return partners;
}

export {
  getGlossary,
  getRessources,
  getTeamMembers,
  getProjects,
  getMiningPools,
  getPartners,
};
