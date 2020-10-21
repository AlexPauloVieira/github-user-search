import React, { useState } from "react";
import Button from "core/components/Button";
import dayjs from "dayjs";
import Header from "core/components/Header";
import ImageLoader from "./components/SearchLoader/ImageLoader";
import InfoLoader from "./components/SearchLoader/InfoLoader";
import { makeRequest } from "core/utils/request";
import { User } from "core/types/User";
import "./styles.css";

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [user, setUser] = useState<User>();
  const [userName, setUserName] = useState(user?.login);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handleOnClick() {
    setIsClicked(true);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    makeRequest({ url: `/${userName}` })
      .then((response) => setUser(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }

  const date = dayjs(user?.created_at).format("DD/MM/YYYY");

  return (
    <>
      <Header />
      <div className='search-container'>
        <form onSubmit={handleSubmit}>
          <h1 className='search-text'>Encontre um perfil Github</h1>
          <input
            type='text'
            placeholder='Usuário Github'
            className='search-input'
            value={userName}
            onChange={handleOnChange}
          />
          <div className='btn-search-container'>
            <Button title='Encontrar' onClick={handleOnClick} />
          </div>
        </form>
      </div>

      {isClicked && (
        <div className='info-container'>
          {isLoading ? (
            <div className='loader-container'>
              <div className='left-loader'>
                <ImageLoader />
              </div>
              <div className='right-loader'>
                <InfoLoader />
              </div>
            </div>
          ) : (
            <>
              <div className='left-components'>
                <img src={user?.avatar_url} className='image-style' />
                <div className='btn-profile-container'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://github.com/${userName}`}
                  >
                    <Button title='Ver Perfil' />
                  </a>
                </div>
              </div>
              <div className='right-components'>
                <div className='top-right-components'>
                  <h1 className='top-text'>
                    Repositórios públicos: {user?.public_repos}
                  </h1>
                  <h1 className='top-text'>Seguidores: {user?.followers}</h1>
                  <h1 className='top-text'>Seguindo: {user?.following}</h1>
                </div>
                <div className='bottom-right-components'>
                  <h1 className='informations'>Informações</h1>
                  <h1 className='infos-text'>
                    <strong>Empresa:</strong> {user?.company}
                  </h1>
                  <h1 className='infos-text'>
                    <strong>Website/Blog:</strong> {user?.blog}
                  </h1>
                  <h1 className='infos-text'>
                    <strong>Localidade:</strong> {user?.location}
                  </h1>
                  <h1 className='infos-text'>
                    <strong>Membro desde:</strong> {date}
                  </h1>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SearchPage;
