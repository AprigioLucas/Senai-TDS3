async function fetchCharacters(){

const page = document.getElementById("pageInput").value || 1;
const apiUrl =`https://rickandmortyapi.com/api/character/?page=${page}`

try {
    const response = await fetch (apiUrl)
    const data = await response.json()
    displayCharacters(data.results)

} catch (error) {
    console.error("Erro ao buscar personagens - ", error)
}

}

function displayCharacters(characters){
    const container = document.getElementById("container")
    container.innerHTML = ""

    characters.forEach(character => {
       const card = document.createElement("div")
       card.className = "card"
       
       const name = document.createElement("h3")
       name.textContent = character.name

       const species = document.createElement("p")
       species.textContent = `Espécie: ${character.species}`
       
       const VivoouMorto = document.createElement("div")
        VivoouMorto.className = "bolinha"
        VivoouMorto.textContent = "";
        
       const totalzin = document.createElement("div")
       totalzin.className = "totalzin"

        const status_existencia = document.createElement("p")
                
        status_existencia.textContent = `Status: ${character.status}`

        switch (character.status) {
            case "Alive":
            VivoouMorto.style.backgroundColor = "green"
            break;
            case "Dead":
            VivoouMorto.style.backgroundColor = "red"
                break;
            default:
                VivoouMorto.style.backgroundColor = "black"
                break;
        }


        const image = document.createElement("img")
        image.src = character.image;
        image.alt = character.name;
        image.style.width = "200px"

        card.appendChild(name)
        card.appendChild(species)
        card.appendChild(totalzin)
        card.appendChild(image)

        totalzin.appendChild(VivoouMorto)
        totalzin.appendChild(status_existencia)

        container.appendChild(card)

    });

}
function searchByName(){
    const searchTerm = document.getElementById("nameByInput").value.toLowerCase()
    const characters = document.querySelectorAll(".card");

    characters.forEach((character) => {
        const characterName = character.querySelector("h3").textContent.toLowerCase()
        if(characterName.includes(searchTerm)){
            character.style.display = "flex"
        }else{
            character.style.display = "none"
        }
    
    })
}