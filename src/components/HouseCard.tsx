import './HouseCard.css'

function HouseCard (props){
    const {name, points} = props.house 

    return (
        <article className='house-card'>
            <header className='house-card_header'>
                <h3 className='house-name'>{name}</h3>
            </header>
            <div className='house-points'>
                <span className='house-points_value'>{points}</span>
                <span className='house-points_label'>points</span>
            </div>
        </article>
    )
}

export default HouseCard