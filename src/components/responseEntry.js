import React from 'react';
import PropTypes from 'prop-types';

import './responseEntry.scss';

const ResponseEntry = ({
  schoolName,
  studentsNb,
  address,
  latLong
}) => {
  return (
    <ul className="responseEntry">
      <strong>{schoolName}</strong>
      <li><em>Adresse: </em>{address}</li>
      <li><em>Nombre d'étudiants: </em>{studentsNb}</li>
      <li>
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${latLong.latitude},${latLong.longitude}`}
          target="_blank"
        >
          Voir sur la carte
        </a>
      </li>
    </ul>
  )
}

ResponseEntry.PropTypes = {
  schoolName: PropTypes.string.isRequired,
  studentsNb: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  latLong: PropTypes.object.isRequired,
}

export default ResponseEntry;
