import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountryData } from '../redux/detail/detail';

export default function Card({ name, info }) {
  const dispatch = useDispatch();

  return (
    <div key={name} className="card">
      <Link
        className="link"
        id={name}
        to={`/detail/${name}`}
        onClick={() => {
          dispatch(getCountryData(name));
        }}
      >
        <h2>{name}</h2>
        <p>
          Total case :
          {info.today_confirmed}
        </p>
      </Link>
    </div>
  );
}
