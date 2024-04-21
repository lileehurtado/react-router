import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Pokemon from '../components/Pokemon';

function PokeDetails() {

    const { pokemon } = useParams();
    const navigate = useNavigate();

    const volver = () => {
        navigate('/pokemones');
    }

    return (
        <div className='d-flex flex-column align-items-center m-5'>
            <Pokemon pokemon={pokemon} />
            <button 
                onClick={volver}
                className='btn btn-secondary btn-md m-3'
            >
            Volver
            </button>
        </div>
    )
}

export default PokeDetails