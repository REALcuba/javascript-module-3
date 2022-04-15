const root = document.getElementById("root")

// Rick & Morti div
const ramApiWraper = document.createElement("div");
ramApiWraper.classList.add("ramApiWraper")
root.appendChild(ramApiWraper)

const ramApiText = document.createElement("p");
ramApiWraper.appendChild(ramApiText)
ramApiText.classList.add("ramApiText")
ramApiText.innerText = "Rick and Morti API"
