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
     episodeOlEl.classList.add("episodeOlEl")
    chapters_list.append(episodeOlEl)

const episodeLiEl = document.createElement("li")
    episodeOlEl.appendChild(episodeLiEl)
    episodeLiEl.classList.add("episodeLiEl")

    //create load button
const loadButton = document.createElement("button")
    loadButton.classList.add('loadButton')
    loadButton.innerText = "load episodes"
    chapters_list.appendChild(loadButton)

const createChapters = () => {
episodeLiEl.innerText = "chapters_list"
    // episode.forEach(episode => {
    //     episodeName = episode[result][character]
    //     episodeLiEl.innerText = episode.name
    //     return episodeName
    //     }
    //   )
    return ;
    
 }


const fetchEpisodes = () => {
    
    fetch("https://rickandmortyapi.com/api/episode/")
    .then(episode => episode.json())
    .then(createChapters)
    .catch(Error)
}


fetchEpisodes()
function Error() {
     console.log("not working");
 }
// create episodes div

const episodesDiv = document.createElement("div")
chapters_wrapper.appendChild(episodesDiv)
episodesDiv.id = "episodesDiv"

//create episode div


const createEpisodeDiv = () => {
const episodeDiv = document.createElement("div")
episodesDiv.appendChild(episodeDiv)
episodeDiv.classList.add("episodeDiv")
 return episodeDiv
}


//fetching episodes data

//  const buildType = (results) =>{
//    const element = document.createElement("div")
//    element.classList.add("results")
//    episodesDiv.appendChild.element
//    element.innerContent = results.image
//    return element
//  }

function paintEpisode(episodeImg) {
     episodeImg.src = "https://rickandmortyapi.com/api/character/avatar/2.jpg"
     
    // episodeImg.forEach(() => {
    //      buildType()
    //  })
     
 }
function fetchEpisodeData() {
    fetch("https://rickandmortyapi.com/api/character/2")
    .then(res => res.json)
    .then( createEpisodeDiv(paintEpisode))
    .catch(Error)
   
    // function getavatarImag() {
    //    return  avatarImg.url = "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    // }
}
fetchEpisodeData()