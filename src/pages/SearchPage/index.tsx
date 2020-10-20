import React, { useEffect, useState } from "react";
import Button from "../../core/components/Button";
import Header from "../../core/components/Header";
import { Link } from "react-router-dom";
import Infos from "../../core/components/Infos";
import "./styles.css";

const SearchPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  function handleUserSearch() {
    setIsClicked(true);
  }

  return (
    <>
      <Header />
      <div className='search-container'>
        <h1 className='search-text'>Encontre um perfil Github</h1>
        <input
          type='text'
          placeholder='Usuário Github'
          className='search-input'
        />
        <div className='btn-search-container'>
          <Button title='Encontrar' onClick={() => alert("Oi")} />
        </div>
      </div>
      <Infos />
    </>
  );
};

export default SearchPage;
