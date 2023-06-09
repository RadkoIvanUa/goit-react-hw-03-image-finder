import { Component } from 'react';

import {
  GalleryItem,
  GalleryItemImg,
} from 'components/image-gallery/StyledImageGallery';

export class ImageGaleryItem extends Component {
  render() {
    const { webformatURL, id, largeImageURL } = this.props;

    return (
      <GalleryItem>
        <GalleryItemImg
          src={webformatURL}
          alt=""
          width="100px"
          id={id}
          data-large={largeImageURL}
        />
      </GalleryItem>
    );
  }
}
