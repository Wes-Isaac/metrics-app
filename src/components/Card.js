import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { alterSelected } from '../redux/home/home';

export default function Card({name, info, selected}) {
  const dispatch = useDispatch();
  const selectHandler = (name) => {
    dispatch(alterSelected(name));
  };

  return (
    <div key={name} >
      <Link className='link' id={name} to={`/detail/${name}`} onClick={(e) => {
        selectHandler(name);
        console.log(selected);
      }}>
          <li >{name}</li>
          <li>{info.today_confirmed}</li>
        </Link>
    </div>
  )
}
