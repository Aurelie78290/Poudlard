import {useEffect, useState} from "react"
import { useParams } from "react-router"

import './CharactersDetails.css'

function CharactersDetails () {
    
    const [character, setCharacter] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch(`https://miadil.github.io/HarryPotterApi/api/json/id/${id}.json`)
        .then(res => res.json())
        .then(resDataJson => setCharacter(resDataJson[0]))
    },[])

    return (
        <div className="charac-detail-page">
            <h1 className="charac-detail-title">Details sur ce personnage</h1>
            <section className="charac-detail-section">
                <p className="charac-detail-name">{character.name}</p>
                <figure><img className="charac-detail-img" src={character.image} alt={character.name} /></figure>
                <p className="charac-detail-specie">Espèce : {character.species}</p>
                <p className="charac-detail-house">Maison : {character.house}</p>
                <p className="charac-detail-actor">Acteur : {character.actor}</p>
            </section>
        </div>
)}

export default CharactersDetails
