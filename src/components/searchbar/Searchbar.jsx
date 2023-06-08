import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
    isSubmitButtonDisabled: true,
  };

  heandleSubmit = e => {
    const { searchQuery } = this.state;
    e.preventDefault();
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
      <header className="searchbar">
        <form className="form" onSubmit={this.heandleSubmit}>
          <button
            type="submit"
            disabled={isSubmitButtonDisabled}
            className="button"
          >
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.heandleSearchInputChange}
          />
        </form>
      </header>
    );
  }
}
