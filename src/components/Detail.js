import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaLessThan } from 'react-icons/fa';
import Info from './Info';

export default function Detail() {
  const detail = useSelector((state) => state.detail);
  let name;
  let info;
  if(detail[0]) {
    console.log(detail);
    name = detail[0].name;
    info = detail[0].info;
  }
 
  return (
    <div>
      <Link to="/"><FaLessThan className="sign" /></Link>
      <h2>DETAIL {detail[0] && name }</h2>
      {info && <Info info={info} />}
    </div>
  );
}
