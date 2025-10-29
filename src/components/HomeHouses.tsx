import HouseCard from './HouseCard';

import './HomeHouses.css'
import { useEffect } from 'react';

type Houses = {
    id:number;
    name:string;
    color:string;
    points:number;
};

function HomeHouses () {
const houses: Houses[] = [
{id:1, name: "Gryffondor", color:'#b21e35', points:245},
{ id: 2, name: "Serpentard", color: "#1f6f43", points: 260 },
{ id: 3, name: "Serdaigle", color: "#1e4b87", points: 230 },
{ id: 4, name: "Poufsouffle", color: "#b18b00", points: 215 },
];

    return (
    <section className="home-houses">
        <div className="home-houses_inner">
            {houses.map((house) => <HouseCard key={house.id} house={house}/>)
            }
            </div>
    </section>
);}

export default HomeHouses