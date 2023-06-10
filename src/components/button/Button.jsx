import { Component } from 'react';
import PropTypes from 'prop-types';

// ICON FOR LOADMORE BUTTON
import { CgSearchLoading } from 'react-icons/cg';

// STYLED COMPONENT
import { LoadMoreButton } from './StyledButton';

export class Button extends Component {
  hendleLoadMore = () => {
    this.props.onClick(1);
  };

  render() {
    return (
      <LoadMoreButton type="button" onClick={this.hendleLoadMore}>
        Load more
        <CgSearchLoading />
      </LoadMoreButton>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
