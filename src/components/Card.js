import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { alterSelected } from '../redux/detail/detail';
import { getCountryData } from '../redux/detail/detail';

export default function Card({name, info, selected}) {
  const dispatch = useDispatch();
  const selectHandler = (name) => {
    dispatch(alterSelected(name));
  };
  const detail = useSelector((state) => state.detail);
  // useEffect(() => {
  //   if(detail.length === 0) {
  //     dispatch(getCountryData());
  //   }
  // }, []);

  return (
    <div key={name} >
      <Link className='link' id={name} to={`/detail/${name}`} onClick={(e) => {
        // e.preventDefault();
        // selectHandler(name);
        // console.log(selected);
      dispatch(getCountryData(name));


      }}>
          <li >{name}</li>
          <li>{info.today_confirmed}</li>
        </Link>
    </div>
  )
}
