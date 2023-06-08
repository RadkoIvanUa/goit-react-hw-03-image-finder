import { Component } from 'react';

export class Button extends Component {
  hendleLoadMore = () => {
    this.props.onClick(1);
  };

  render() {
    return (
      <button type="button" onClick={this.hendleLoadMore}>
        Load more
      </button>
    );
  }
}
