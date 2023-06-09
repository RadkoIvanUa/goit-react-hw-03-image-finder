import { Component } from 'react';

import { LoadMoreButton } from './StyledButton';

export class Button extends Component {
  hendleLoadMore = () => {
    this.props.onClick(1);
  };

  render() {
    return (
      <LoadMoreButton type="button" onClick={this.hendleLoadMore}>
        Load more
      </LoadMoreButton>
    );
  }
}
