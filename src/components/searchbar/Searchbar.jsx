import { Component } from 'react';

import {
  SearchbarConatiner,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLAbel,
  SearchFormInput,
} from './StyledSearchbar';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
    isSubmitButtonDisabled: true,
  };

  heandleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);
  };

  heandleSearchInputChange = e => {
    const { value } = e.target;

    this.setState({
      searchQuery: value,
      isSubmitButtonDisabled: false,
    });

    if (value.trim() === '') {
      this.setState({
        isSubmitButtonDisabled: true,
      });
    }
  };

  render() {
    const { searchQuery, isSubmitButtonDisabled } = this.state;

    return (
      <SearchbarConatiner>
        <SearchForm onSubmit={this.heandleSubmit}>
          <SearchFormButton
            type="submit"
            disabled={isSubmitButtonDisabled}
            className="button"
          >
            <SearchFormButtonLAbel>Search</SearchFormButtonLAbel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.heandleSearchInputChange}
          />
        </SearchForm>
      </SearchbarConatiner>
    );
  }
}
