import React from "react";
import { Link } from "react-router-dom";
import Button from "core/components/Button";
import Header from "core/components/Header";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className='title-container'>
        <h1 className='home-title'>
          Desafio do Capítulo 3, Bootcamp DevSuperior
        </h1>
      </div>
      <div className='home-paragraph-container'>
        <p className='home-paragraph'>
          Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
          <br />
          Favor observar as instruções passadas no capítulo sobre a elaboração
          deste projeto. <br /> <br />
          Este design foi adaptado a partir de Ant Design System for Figma, de
          Mateusz Wierzbicki: <span>antforfigma@gmail.com</span>
        </p>
      </div>
      <div className='btn-container'>
        <Link to='/search'>
          <Button title='Começar' />
        </Link>
      </div>
    </>
  );
};

export default Home;
