import { useEffect, useState } from "react"
import { Link } from "react-router"

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
            {dataCharacter.map((character)=> <Link to={`/characters/${character.id}`}>
            <article key={character.id} className="Charac-GlobalCard">
                <img src={character.image} alt={character.name}/>
                <p>{character.name}</p>
            </article>
            </Link>)}
        </div>
        </section>
}

export default Characters