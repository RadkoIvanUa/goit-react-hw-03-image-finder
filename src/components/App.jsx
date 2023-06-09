import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Loader } from './loader/Loader';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { Button } from './button/Button';

import { getPhoto } from '../helpers/axios';

import { MainApp } from 'components/StyledApp';

export class App extends Component {
  state = {
    photosArr: [],
    page: 1,
    searchQuery: '',
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    const currentPage = prevState.page;
    const nextPage = this.state.page;
    const { searchQuery } = this.state;
    if (currentPage !== nextPage) {
      try {
        const nextPagePhotosArr = await getPhoto(searchQuery, nextPage);
        this.setState(prevState => {
          return {
            photosArr: [...prevState.photosArr, ...nextPagePhotosArr],
          };
        });
      } catch (error) {
        if (error.response.status === 400) {
          this.setState({ status: 'idle' });
          toast.info(
            `We're sorry, but you've reached the end of search results`
          );
        }
      }
    }
  }

  handleSubmit = async searchQuery => {
    this.setState({ searchQuery, status: 'pending', photosArr: [] });

    if (searchQuery.trim() === '') {
      return;
    }

    const searchedPhotos = await getPhoto(searchQuery, 1);

    if (searchedPhotos.length === 0) {
      toast.error('No results found!');
      this.setState({ status: 'error' });
      return;
    }

    this.setState({ photosArr: searchedPhotos, status: 'resolved' });
  };

  onLoandMore = step => {
    this.setState(prevState => {
      return {
        page: prevState.page + step,
      };
    });
  };

  getModalData = url => {
    if (url) {
      this.setState({ largeImageURL: url, isModalOpen: true });
    }
  };

  render() {
    const { photosArr, status } = this.state;

    return (
      <MainApp>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          photosArr={photosArr}
          getLargePhotoURL={this.getModalData}
        />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Button onClick={this.onLoandMore} />}
        <ToastContainer autoClose={3000} />
      </MainApp>
    );
  }
}