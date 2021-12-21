import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../redux/home/home';
import Card from './Card';

export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.home);

  useEffect(() => {
    if(countries.length === 0) {
      dispatch(getDragons());
    }
  }, []);

  return (
    <div className='card-container'>
      {countries.map(([name,info]) => (
        <Card key={name} name={name} info={info} />
        
      ))}
    
    </div>
  );
}
