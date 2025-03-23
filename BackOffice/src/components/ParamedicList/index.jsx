import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item'; // Assurez-vous que le chemin est correct

const ParamedicList = ({ arr }) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return <p>Aucun paramédical disponible.</p>; // Affichage d'un message si le tableau est vide ou incorrect
  }

  return (
    <ul>
      {arr.map((paramedic) => (
        <Item key={paramedic._id} data={paramedic} type="paramedic" />
      ))}
    </ul>
  );
};


export default ParamedicList;