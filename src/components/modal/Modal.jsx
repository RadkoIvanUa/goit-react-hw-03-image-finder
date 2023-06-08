import { Component } from 'react';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export class Modal extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps.isModalOpen  :>> ', prevProps.isModalOpen);
    console.log('this.props.isModalOpen  :>> ', this.props.isModalOpen);

    if (
      prevProps.isModalOpen !== this.props.isModalOpen ||
      prevProps.largeImageURL !== this.props.largeImageURL
    ) {
      this.setState({ isModalOpen: this.props.isModalOpen });
    }
  }

  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    return (
      <ReactModal
        style={customStyles}
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleCloseModal}
      >
        <img src={this.props.largeImageURL} alt="" width="800px" />
      </ReactModal>
    );
  }
}
