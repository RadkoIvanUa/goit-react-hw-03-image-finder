import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

// BODYSCROLL LOCK LIBRARY
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

// COMPONENTS
import { ImageGaleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { Modal } from 'components/modal/Modal';

// STYLED COMPONENT
import { ImageGalleryConatiner } from './StyledImageGallery';

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

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    largeImageURL: '',
  };

  //CLOSE MODAL AFTER NEW SERCH QUERY
  componentDidUpdate(prevProps, _) {
    if (prevProps.photosArr.length !== this.props.photosArr.length)
      this.setState({ isModalOpen: false });
  }

  handleModalOpen = e => {
    const largeImageURL = e.target.dataset.large;
    if (!largeImageURL) {
      return;
    }

    this.setState({ isModalOpen: true, largeImageURL });
  };

  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    const { largeImageURL, isModalOpen } = this.state;

    return (
      <>
        <ImageGalleryConatiner onClick={this.handleModalOpen}>
          {this.props.photosArr.map(({ webformatURL, largeImageURL }) => (
            <ImageGaleryItem
              key={webformatURL}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </ImageGalleryConatiner>

        <ReactModal
          style={customStyles}
          isOpen={isModalOpen}
          onRequestClose={this.handleCloseModal}
          onAfterOpen={disableBodyScroll}
          onAfterClose={clearAllBodyScrollLocks}
        >
          <Modal largeImageURL={largeImageURL}></Modal>
        </ReactModal>
      </>
    );
  }
}

ImageGallery.propTypes = {
  photosArr: PropTypes.arrayOf(PropTypes.object).isRequired,
  getLargePhotoURL: PropTypes.func.isRequired,
};
