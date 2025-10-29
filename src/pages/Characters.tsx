import { useEffect, useState } from "react"

import './Characters.css'

function Characters () {
    const [dataCharacter, setDataCharacter] = useState([])

    const getData = () => {
        fetch('https://miadil.github.io/HarryPotterApi/api/json/characters.json')
        .then(res=> res.json())
        .then(resDataJson => console.log(resDataJson) || setDataCharacter(resDataJson))
    }

    useEffect(() => {
        console.log('Je suis dans le use effect')
        getData()
    },[])

    return <section className="charac-section">
        {console.log('je suis dans le return')}
        <h1>Characters</h1>
        <div className="charac-general">
            {dataCharacter.map((character)=>
            <article className="Charac-GlobalCard">
                <img src={character.image} alt={character.name}/>
                <p>{character.name}</p>
            </article>)}
        </div>
        </section>
}

export default Characters