import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({name, info}) {
  return (
    <div key={name} >
      <Link className='link' id={name} to={`/detail/${name}`} onClick={() => console.log(name)}>
          <li >{name}</li>
          <li>{info.today_confirmed}</li>
        </Link>
    </div>
  )
}
