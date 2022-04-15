const root = document.getElementById("root")

// Rick & Morti div
const ramApiWrapper = document.createElement("div");
ramApiWrapper.classList.add("ramApiWrapper")
root.appendChild(ramApiWrapper)

const ramApiText = document.createElement("p");
ramApiWrapper.appendChild(ramApiText)
ramApiText.classList.add("ramApiText")
ramApiText.innerText = "Rick and Morti API"


// elements Wrapper
 const elements_wrapper = document.createElement("div");
 root.appendChild(elements_wrapper)
 elements_wrapper.id = "elements_wrapper"

 // chapters List div
const chapters_list = document.createElement("div");
elements_wrapper.appendChild(chapters_list);
chapters_list.classList.add("chapters_list")

const chapters_wrapper = document.createElement("div");
elements_wrapper.appendChild(chapters_wrapper);
chapters_wrapper.id = "chapters_wrapper";

// create chapters List function  

const episodeOlEl = document.createElement("ol")
    chapters_list.append(episodeOlEl)

  const episodeLiEl = document.createElement("li")
    episodeOlEl.appendChild(episodeLiEl)
    

const createChapters = (episode) => {
    // episode.forEach(episode => {
    //     return episodeLiEl(episode.name)}
    //     )
    episodeLiEl.innerText = episode.name
 }


const fetchEpisodesName = () => {
    
    fetch("https://rickandmortyapi.com/api/episode/1")
    .then(res => res.json())
    .then(createChapters)
    .catch(Error )
}

function Error() {
     console.log("not working");
 }
fetchEpisodesName()

// create episodes div

const episodesDiv = document.createElement("div")
chapters_wrapper.appendChild(episodesDiv)
episodesDiv.id = "episodesDiv"

//create episode div


const createEpisodeDiv = () => {
const episodeDiv = document.createElement("div")
episodesDiv.appendChild(episodeDiv)
episodeDiv.classList.add("episodeDiv")

}
createEpisodeDiv()