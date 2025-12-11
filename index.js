
const idea = document.getElementById("idea")
document.getElementById("btn").addEventListener("click", ()=>{
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(data=>data.json())
    .then(ideaText=>idea.textContent = ideaText.activity)
})