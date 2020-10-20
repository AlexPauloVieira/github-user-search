import React, { useEffect, useState } from "react";
import Button from "../Button";
import { User } from "../../types/User";
import { makeRequest } from "../../utils/request";

import "./styles.css";
import { Link } from "react-router-dom";

const Infos = () => {
  const [user, setUser] = useState<User>();
  const usuario = "zenorocha";

  useEffect(() => {
    makeRequest({ url: `/${usuario}` }).then((response) => {
      setUser(response.data);
    });
  }, [usuario]);

  return (
    <div className='info-container'>
      <div className='left-components'>
        <img src={user?.avatar_url} className='image-style' />
        <div className='btn-profile-container'>
          <a target='_blank' href='https://github.com/zenorocha'>
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
            <strong>Membro desde:</strong> {user?.created_at}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Infos;
