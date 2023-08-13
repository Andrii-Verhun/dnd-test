import React, { useState } from 'react';

import { Board } from "./Board";

const cards = {
  id: 'dp-1',
  cards: [
    {
      id: 'id-0',
      name: 'Andrii',
    },
    {
      id: 'id-1',
      name: 'Oleh',
    },
    {
      id: 'id-2',
      name: 'Anatolii',
    },
    {
      id: 'id-3',
      name: 'Max',
    },
  ],
};

const cards2 = {
  id: 'dp-2',
  cards: [
    {
      id: 'id-4',
      name: 'Sean',
    },
    {
      id: 'id-5',
      name: 'John',
    },
    {
      id: 'id-6',
      name: 'Bread',
    },
    {
      id: 'id-7',
      name: 'Sten',
    },
  ],
};


export const App = () => {

  const [state, setState] = useState([cards, cards2]);
  
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Board state={state} setState={setState}/>
    </div>

  );
};
