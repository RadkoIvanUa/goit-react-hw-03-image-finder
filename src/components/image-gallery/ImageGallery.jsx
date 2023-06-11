import { Component } from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import { ImageGaleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { Modal } from 'components/modal/Modal';

// STYLED COMPONENT
import { ImageGalleryConatiner } from './StyledImageGallery';

export class ImageGallery extends Component {
  state = {
    largeImageURL: '',
    isModalOpen: false,
  };

  handleModalOpen = e => {
    const largeImageURL = e.target.dataset.large;

    if (!largeImageURL) {
      return;
    }

    this.setState({ largeImageURL, isModalOpen: true });
  };
  render() {
    const { largeImageURL } = this.state;
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
          <Modal
            photosArr={this.props.photosArr}
            largeImageURL={largeImageURL}
          />
        </ImageGalleryConatiner>
      </>
    );
  }
}

ImageGallery.propTypes = {
  photosArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
