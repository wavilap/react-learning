import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink, Image, Name } from './styles';

function PersonCard({
  id,
  name,
  image,
}) {
  return (
    <StyledLink to={`/detail/${id}`}>
      <div>
        <Image src={image} alt={name} />
        <Name>{name}</Name>
      </div>
    </StyledLink>
  );
}

PersonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PersonCard;