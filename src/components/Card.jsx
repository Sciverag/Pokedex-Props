import "../styles/Card.css";;

export default function Card({pokemon}){

    let typesText = pokemon.types.map(function (type) {
        return type + " "
    });
    let evolvesText;

    if(pokemon.evolution.next != null){
        evolvesText = <div><h4>Evolución: </h4><p>{pokemon.evolution.next + " al nivel " + pokemon.evolution.level}</p></div>;  
    }else{
        evolvesText = "";
    }

    return (

            <div className="card-Card">
                <h1 className="pokemonName-Card">{pokemon.name}</h1>
                <div className="imageContainer-Card">
                    <img className={pokemon.types[0]} src={pokemon.image}></img>
                </div>
                <div className="stats-Card">
                    <div>
                        <h4>Tipos: </h4>
                        <p>{typesText}</p>
                    </div>
                    <div>
                        <h4>HP: </h4>
                        <p>{pokemon.stats.hp}</p>
                    </div>
                    <div>
                        <h4>Ataque: </h4>
                        <p>{pokemon.stats.attack}</p>
                    </div>
                    <div>
                        <h4>Defensa: </h4>
                        <p>{pokemon.stats.defense}</p>
                    </div>
                    <div>
                        <h4>Ataque Especial: </h4>
                        <p>{pokemon.stats.specialAttack}</p>
                    </div>
                    <div>
                        <h4>Defensa Especial: </h4>
                        <p>{pokemon.stats.specialDefense}</p>
                    </div>
                    <div>
                        <h4>Velocidad: </h4>
                        <p>{pokemon.stats.speed}</p>
                    </div>
                    {evolvesText}
                </div>
                <p className="description-Card">{pokemon.description}</p>
            </div>
        
    )
}

