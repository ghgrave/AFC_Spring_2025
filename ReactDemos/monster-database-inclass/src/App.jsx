import React from "react"
import MonsterCard from "./components/MonsterCard";
import {monsters} from "./Util/database";

const App = () =>{

    const displayMonsters = monsters.map((monster, i) =>{
        return (<MonsterCard {...monster} key={i}/>)
    })
    return (
        <>
            <h1>Monster Database</h1>
            {displayMonsters}
        </>
    )
}

export default App;

