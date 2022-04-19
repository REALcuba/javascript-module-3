const root = document.getElementById("root");

// Rick & Morti div
const ramApiWrapper = document.createElement("div");
ramApiWrapper.classList.add("ramApiWrapper");
root.appendChild(ramApiWrapper);

const ramApiText = document.createElement("p");
ramApiWrapper.appendChild(ramApiText);
ramApiText.classList.add("ramApiText");
ramApiText.innerText = "Rick and Morti API";

// elements Wrapper
const elements_wrapper = document.createElement("div");
root.appendChild(elements_wrapper);
elements_wrapper.id = "elements_wrapper";

// chapters List div
const chapters_list = document.createElement("div");
elements_wrapper.appendChild(chapters_list);
chapters_list.classList.add("chapters_list");

const chapters_wrapper = document.createElement("div");
elements_wrapper.appendChild(chapters_wrapper);
chapters_wrapper.id = "chapters_wrapper";

// create chapters List function

const episodeOlEl = document.createElement("ol");
episodeOlEl.classList.add("episodeOlEl");
chapters_list.append(episodeOlEl);

//create load more button
const loadButton = document.createElement("button");
loadButton.classList.add("loadButton");
loadButton.innerText = "load episodes";
chapters_list.appendChild(loadButton);

// create episodes div

const episodesDiv = document.createElement("div");
chapters_wrapper.appendChild(episodesDiv);
episodesDiv.id = "episodesDiv";

const createChaptersList = (episodes) => {
  episodes.results.forEach((episode) => {
    const episodeLiEl = document.createElement("li");
    episodeOlEl.appendChild(episodeLiEl);
    episodeLiEl.classList.add("episodeLiEl");
    episodeLiEl.innerText = episode.name;
     episodeLiEl.addEventListener("click", () => createEpisodeLink(episode))
     
      // episodeLiEl.addEventListener("click", () => showEpisodeData(episode))
    // if(episode.info.next ) {
    
    // }createEpisodeLink(episode)
     return episodeLiEl
  });
};
const createEpisodeLink = (episode) => {

    episodesDiv.innerHTML = "<div id = 'episodeLink'></div>"
    // episodeLink.classList.add("episodeLink")
    episodeLink.innerHTML =`<h2>${episode.name}</h2> ` + 
     `<h3>${episode.episode} | ${episode.air_date}</h3>`;

    
    
     const charactersDiv = document.createElement("div")
     episodesDiv.appendChild(charactersDiv)
     charactersDiv.innerHTML =`<div id="charactersDiv"></div>`
   episode.results
   episode.characters
    .map(characterUrl => createCharacterThumbnail(characterUrl))
    .forEach(characterUrl =>  characterUrl)
   
    
    
}
function createCharacterThumbnail(characterUrl) {
  
  const characterContainer = document.createElement("div")
  characterContainer.classList.add("characterThumbnail")
  charactersDiv.appendChild(characterContainer)

  fetch(characterUrl)
    .then(res => res.json())
    .then(character => renderCharacterThumbnail(characterContainer, character));
    return characterContainer
}
function renderCharacterThumbnail (parent, character) {
parent.innerHTML = `<img src = ${character.image}>` +
`<h4>${character.name}</h4>` +
`<h5>${character.species} | ${character.status}</h5>`
}
//----


const fetchEpisodesList = () => {
  fetch("https://rickandmortyapi.com/api/episode")
    .then((res) => res.json())
    .then((episodes) => createChaptersList(episodes))
    .catch(Error);
};

//====================================
//Load more button
const loadMoreButton = (episodes) => {
  const loadButton = document.getElementsByClassName("loadButton")
  loadButton.addEventListener("click", showMoreEpisodeList)
}
const showMoreEpisodeList = (episodes) =>{
  fetch()

}

// create Error

function Error() {
  console.log("not working");
}
fetchEpisodesList();
// fetchEpisodesData();