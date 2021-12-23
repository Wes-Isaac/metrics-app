import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
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
      <div className="detail-header">
        <Link to="/"><FaChevronCircleLeft className="sign" /></Link>
        <h2>{detail[0] && name }</h2>
      </div>
      {info && <Info info={info} />}
    </div>
  );
}
