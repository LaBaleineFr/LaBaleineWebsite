import axios from 'axios';

var axiosInstance = axios.create({
  baseURL: 'https://api.baleine.036.fr'
});


async function getGlossary(limit){
  const glossary = await axiosInstance.get('/word-definitions');
  return glossary.data;
}

export {
  getGlossary,
};
