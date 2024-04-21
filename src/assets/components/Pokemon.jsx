import React, { useEffect, useState } from 'react'

function Pokemon( { pokemon } ) {

    const [poke, setPoke] = useState({
        name: '',
        img: '',
        stats: [],
        type: [],
    });

    useEffect(() => {
        const pokedexInfo = async () => {
          try {
            const response = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
            );
            const data = await response.json();
            setPoke({
              name: data.name,
              img: data.sprites.other.home.front_default,
              stats: data.stats,
              type: data.types,
            });
          } catch (error) {
            console.error(error);
          }
        };
    
        pokedexInfo();
      }, []);

    return (
        <div className="card flex-row align-items-center">
            <img
                src={poke.img}
                alt={poke.name}
                width={100}
            />
            <div className="card-body">
                <h2>{poke.name}</h2>
                <ul>
                    {poke.stats.map((stat, index) => (
                    <li key={index}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                    ))}
                    <li>{poke.type.map((type, index) => <span key={index} className="badge badge-pill bg-primary">
                                {type.type.name}
                                </span>)
                            }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Pokemon