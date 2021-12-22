import React from 'react';
import { Link } from 'react-router-dom';
import { alterSelected } from '../redux/home/home';

export default function Card({name, info, selected}) {
  return (
    <div key={name} >
      <Link className='link' id={name} to={`/detail/${name}`} onClick={() => {
        selected = true;
        console.log(selected);
      }}>
          <li >{name}</li>
          <li>{info.today_confirmed}</li>
        </Link>
    </div>
  )
}
