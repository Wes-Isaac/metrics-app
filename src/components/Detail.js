import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryData } from '../redux/detail/detail';
import Info from './Info';


export default function Detail() {
  // const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  let name;
  let info;
  if(detail[0]) {
    console.log(detail);
    name = detail[0].name;
    info = detail[0].info;
  }
  


  // useEffect(() => {
  //   if(detail.length === 0) {
  //     dispatch(getCountryData());
  //   }
  // }, []);
  return (
    <div>
      <h2>DETAIL {detail[0] && name }</h2>
      {info && <Info info={info} />}
    </div>
  );
}
