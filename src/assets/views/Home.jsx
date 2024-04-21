import React from 'react'

const Home = () => {
  return (
    <section className='d-flex flex-column align-items-center justify-content-center'>
        <h1 className='text-center mt-2'>Bienvenido maestro pokemón</h1>
        <img 
            src="./src/assets/img/pikachu-happy.png"
            width={300}
            alt="pikachu"
        />
    </section>
  )
}

export default Home