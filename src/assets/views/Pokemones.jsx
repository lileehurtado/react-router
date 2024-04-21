import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Pokemones = () => {
    const [pokemon, setPokemon] = useState('');
    const [pokemonData, setPokemonData] = useState([]);

    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const pokemonList = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon');
                const data = await response.json();
                const dataPokemon = data.results.map((pokemon) => pokemon.name);
                setPokemonData(dataPokemon);
            } catch (error) {
                console.log(error);
            }
        };

        pokemonList();
    }, []);

    const pokemonInfo = () => {
        if (!pokemon) {
            setError('Tienes que seleccionar un pokemón');
            navigate('/pokemones');
        } else {
            setError('');
            navigate(`/pokemones/${pokemon}`);
        }
    };

    return (
        <section className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='mt-2'>Selecciona un Pokemón</h1>
            <select 
                onChange={({ target }) => setPokemon(target.value)}
                className='form-select-lg mb-3'
            >
                <option value="">Elige un pokemón </option>
                {pokemonData.map((name, index) => (
                <option 
                    key={index} 
                    value={name}
                >
                {name}
                </option>
                ))}
            </select>
            <button 
                onClick={pokemonInfo}
                className='btn btn-secondary btn-md'
            >
            Detalles
            </button>
            <p>{error}</p>            
        </section>
    )
}

export default Pokemones