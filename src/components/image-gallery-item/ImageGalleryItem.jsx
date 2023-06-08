import { Component } from 'react';

export class ImageGaleryItem extends Component {
  render() {
    const { webformatURL, id, largeImageURL } = this.props;

    return (
      <li className="gallery-item">
        <img
          src={webformatURL}
          alt=""
          width="100px"
          id={id}
          data-large={largeImageURL}
        />
      </li>
    );
  }
}
