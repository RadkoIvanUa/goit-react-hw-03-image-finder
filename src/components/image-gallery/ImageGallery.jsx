import { Component } from 'react';

import { ImageGaleryItem } from 'components/image-gallery-item/ImageGalleryItem';

export class ImageGallery extends Component {
  handlePhotoClick = e => {
    const largeImageURL = e.target.dataset.large;
    this.props.getLargePhotoURL(largeImageURL);
  };

  render() {
    return (
      <>
        <ul className="gallery" onClick={this.handlePhotoClick}>
          {this.props.photosArr.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGaleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </ul>
      </>
    );
  }
}
