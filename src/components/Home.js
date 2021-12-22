import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/home/home';
import Card from './Card';

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.home);

  useEffect(() => {
    if(countries.length === 0) {
      dispatch(getData());
    }
  }, []);

  return (
    <div className='card-container'>
      {countries.map(({id,info, selected}) => (
        <Card key={id} name={id} info={info} selected={selected} />
        
      ))}
    
    </div>
  );
}
