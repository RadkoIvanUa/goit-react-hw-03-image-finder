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
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
};

export class Modal extends Component {
  state = {
    isModalOpen: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.largeImageURL !== this.props.largeImageURL) {
      this.setState({
        isModalOpen: true,
        largeImageURL: this.props.largeImageURL,
      });
    }
    //CLOSE MODAL AFTER NEW SERCH QUERY
    if (prevProps.photosArr.length !== this.props.photosArr.length)
      this.setState({ isModalOpen: false });
  }
  handleCloseModal = () =>
    this.setState({ isModalOpen: false, largeImageURL: '' });

  render() {
    return (
      <>
        <ReactModal
          style={customStyles}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleCloseModal}
          onAfterOpen={disableBodyScroll}
          onAfterClose={clearAllBodyScrollLocks}
        >
          <img src={this.state.largeImageURL} alt="" width="600px" />
        </ReactModal>
      </>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  photosArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
