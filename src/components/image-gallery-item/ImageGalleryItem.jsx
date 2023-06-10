import { Component } from 'react';
import PropTypes from 'prop-types';

// STYLED COMPONENT
import {
  GalleryItem,
  GalleryItemImg,
} from 'components/image-gallery/StyledImageGallery';

export class ImageGaleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL } = this.props;

    return (
      <GalleryItem>
        <GalleryItemImg
          src={webformatURL}
          alt=""
          width="100px"
          data-large={largeImageURL}
        />
      </GalleryItem>
    );
  }
}

ImageGaleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
