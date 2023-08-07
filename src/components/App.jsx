import React, { useState } from 'react';

import { Board } from "./Board";

const cards = [
  {
    id: 'id-0',
    name: 'Andrii',
    position: 0,
  },
  {
    id: 'id-1',
    name: 'Oleh',
    position: 1,
  },
  {
    id: 'id-2',
    name: 'Anatolii',
    position: 2,
  },
  {
    id: 'id-3',
    name: 'Max',
    position: 3,
  },
]


export const App = () => {

  const [state, setState] = useState(cards);
  
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
