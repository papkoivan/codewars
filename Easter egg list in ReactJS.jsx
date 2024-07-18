import React from 'react';

export const EggList = (props) => {
  return (<ul>
    {
      props.eggs.map((egg, index ) => <EasterEgg name={egg} key={index} />)
    }
  </ul>)

};

export const EasterEgg = (props) => {
  return <li>{props.name}</li>
};
