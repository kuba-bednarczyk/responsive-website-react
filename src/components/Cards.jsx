import React from 'react';
import './Cards.css';
import '../../src/App.css';

import CardItem from './CardItem';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out these EPIC destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src="images/img-9.jpg"
              text='Explore the hidden waterfall deep inside the Amazon jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src="images/img-2.jpg"
              text='Travel through the Islands Of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src="images/img-4.jpg"
              text='Experience Football on Top of the Mauntains'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src="images/img-8.jpg"
              text='Ride through the Sahara Desret on guided camel tour'
              label='Adrenaline'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
