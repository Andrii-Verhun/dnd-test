import React, { useState } from 'react';

import { Board } from "./Board";

const cards = [
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
