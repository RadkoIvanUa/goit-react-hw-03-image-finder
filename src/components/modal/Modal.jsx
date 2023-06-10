import PropTypes from 'prop-types';

export function Modal({ largeImageURL }) {
  return <img src={largeImageURL} alt="" width="600px" />;
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};
