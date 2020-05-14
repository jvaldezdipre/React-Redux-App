import React from 'react';

const Character = ({ character }) => {
  return (
    <div className='character-card'>
      <img src={character.image} alt='' />
      <h3>{character.name}</h3>
      <h4> {character.species} </h4>
    </div>
  );
};

export default Character;
