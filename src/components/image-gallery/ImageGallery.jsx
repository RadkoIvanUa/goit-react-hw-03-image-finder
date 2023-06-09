import { Component } from 'react';
import ReactModal from 'react-modal';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { ImageGaleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { Modal } from 'components/modal/Modal';

import { ImageGalleryConatiner } from './StyledImageGallery';

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
          {this.props.photosArr.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGaleryItem
              key={id}
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
