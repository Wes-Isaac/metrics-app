import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryData } from '../redux/detail/detail';

export default function Card({name, info}) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);

  return (
    <div key={name} className="card" >
      <Link className='link' id={name} to={`/detail/${name}`} onClick={() => {
      dispatch(getCountryData(name));
      }}>
          <li >{name}</li>
          <li>{info.today_confirmed}</li>
        </Link>
    </div>
  )
}
