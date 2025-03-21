import React from 'react';
import './App.scss';
import { Search } from './app/components/Search';
import { Api, handleErrorMessages } from './app/config/axios.config';
import { PokeCard } from './app/components/PokeCard';
import { Header } from './app/components/Header';
import { Footer } from './app/components/Footer';

function App() {
  const [pokemon, setPokemon] = React.useState(null);

  const handleSearch = async (query: string) => {

    try {
      const response = await Api.get(`/pokemon/${query}`);
      console.log(response.data);
      setPokemon(response.data);
    } catch (error) {
      setPokemon(null);
      handleErrorMessages(error);
      console.error(error);
    }
    
  }

  return (
    
    <div className="App">
      
      <div className='container'>
      <Header/>
      <Search handleSearch={handleSearch}/>
      {pokemon !==null && (
        <PokeCard pokemon={pokemon}/>
      )}
      <Footer/>
      </div>
      
    </div>
  );
}

export default App;
