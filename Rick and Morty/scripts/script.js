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

const createChaptersList = (episodes) => {
  episodes.results.forEach((episode) => {
    const episodeLiEl = document.createElement("li");
    episodeOlEl.appendChild(episodeLiEl);
    episodeLiEl.classList.add("episodeLiEl");
    episodeLiEl.innerText = episode.name;
     episodeLiEl.addEventListener("click", () => createEpisodeLink(episode))
    // if(episode.info.next ) {
    
    // }
     return episodeLiEl
  });
};
const createEpisodeLink = (episode) => {
    const episodeLink = document.createElement("div")
    episodesDiv.appendChild(episodeLink)
    episodeLink.classList.add("episodeLink")
    episodeLink.innerText = `${episode.name} ` + 
     `${episode.episode} | ${episode.air_date}`;
   
    return episodeLink
}


// showEpisodeData

const showEpisodeData = (episode) => {
  console.log(episode.name)
}
const fetchEpisodesList = () => {
  fetch("https://rickandmortyapi.com/api/episode")
    .then((res) => res.json())
    .then((episodes) => createChaptersList(episodes))
    .catch(Error);
};

//====================================
// create episodes div

const episodesDiv = document.createElement("div");
chapters_wrapper.appendChild(episodesDiv);
episodesDiv.id = "episodesDiv";

//create episode div
// const createEpisodesData = (episode) => {
//  episode.results
//    .forEach(episode => console.log(episode.name)); 
//     const episodeDiv = document.createElement("div")
//     episodesDiv.appendChild(episodeDiv)
//     episodeDiv.classList.add("episodeDiv")
//     episodeDiv.innerText = episode.name;
//     episodeDiv.addEventListener("click", () => showEpisodeData)
//     return episodeDiv
// }

// const createEpisodesDiv = (episode) => {
//   const episodeDiv = document.createElement("div");
//   episodesDiv.appendChild(episodeDiv);
//   episodeDiv.classList.add("episodeDiv");
// //   episode.forEach((episode) => {
    
//     episodeDiv.innerText = `${episode.name}` + `${episode.episode}| ${episode.air_date}`;
//       const createEpisodeLink = () => {
    
// }
// console.log(createEpisodesDiv)
        
// //   }
// //   );
// };

//fetching episodes data

// function fetchEpisodesData() {
//   fetch("https://rickandmortyapi.com/api/episode")
//     .then((res) => res.json())
//     .then((episode) => createEpisodesData(episode))
//     .catch(Error);
// }

// create 

function Error() {
  console.log("not working");
}
fetchEpisodesList();
// fetchEpisodesData();