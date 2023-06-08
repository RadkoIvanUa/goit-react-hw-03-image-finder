import { Component } from 'react';

import { Loader } from './loader/Loader';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { Button } from './button/Button';
import { Modal } from './modal/Modal';

import { getPhoto } from './helpers/axios';

export class App extends Component {
  state = {
    photosArr: [],
    page: 1,
    searchQuery: '',
    status: 'idle',
    largeImageURL: '',
    isModalOpen: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const currentPage = prevState.page;
    const nextPage = this.state.page;
    const { searchQuery } = this.state;

    if (currentPage !== nextPage) {
      const nextPagePhotosArr = await getPhoto(searchQuery, nextPage);
      this.setState(prevState => {
        return {
          photosArr: [...prevState.photosArr, ...nextPagePhotosArr],
        };
      });
    }
  }

  handleSubmit = async searchQuery => {
    this.setState({ searchQuery, status: 'pending', photosArr: [] });
    try {
      if (searchQuery.trim() === '') {
        return;
      }

      const searchedPhotos = await getPhoto(searchQuery, 1);

      searchedPhotos.length === 0
        ? this.setState({ status: 'error' })
        : this.setState({ photosArr: searchedPhotos, status: 'resolved' });
    } catch (error) {
      console.log(error);
    }
  };

  onLoandMore = step => {
    this.setState(prevState => {
      return {
        page: prevState.page + step,
      };
    });
  };

  getModalData = url => {
    this.setState({ largeImageURL: url, isModalOpen: true });
  };

  render() {
    const { photosArr, status, isModalOpen, largeImageURL } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          photosArr={photosArr}
          getLargePhotoURL={this.getModalData}
        />
        {status === 'error' && <h2>Whoops...not match result!!!</h2>}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Button onClick={this.onLoandMore} />}

        <Modal isModalOpen={isModalOpen} largeImageURL={largeImageURL} />
      </>
    );
  }
}
