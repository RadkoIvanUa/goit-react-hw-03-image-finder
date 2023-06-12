import PropTypes from 'prop-types';
import { Component } from 'react';
import ReactModal from 'react-modal';

// BODYSCROLL LOCK LIBRARY
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

//FOR REACT MODAL
ReactModal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1200 },
};

export class Modal extends Component {
  render() {
    const { isModalOpen, onCloseModal, largeImageURL } = this.props;
    return (
      <>
        <ReactModal
          style={customStyles}
          isOpen={isModalOpen}
          onRequestClose={onCloseModal}
          onAfterOpen={disableBodyScroll}
          onAfterClose={clearAllBodyScrollLocks}
        >
          <img src={largeImageURL} alt="" width="800px" />
        </ReactModal>
      </>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
