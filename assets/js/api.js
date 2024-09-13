

async function fetchProfileData() {
 
       const urlApi = 'https://raw.githubusercontent.com/LukeRobs/Portfolio-Lucas/Main/assets/data/profile.json'
       const fetching = await fetch(urlApi)
       return await fetching.json()
}
