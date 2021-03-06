import React from 'react';
import { Modal } from 'react-bootstrap';
import connect from '../connect';
import AddChannelModal from './modals/AddChannelModal';
import RenameChannelModal from './modals/RenameChannelModal';
import DeleteChannelModal from './modals/DeleteChannelModal';

const mapStateToProps = state => state.modals;

@connect(mapStateToProps)
class ModalWindow extends React.Component {
  handleClose = () => {
    const { handleModal } = this.props;
    handleModal({
      status: false,
      info: {},
    });
  };

  render() {
    const { status, info } = this.props;
    return (
      <Modal show={status} onHide={this.handleClose}>
        { info.type === 'addChannel' && <AddChannelModal close={this.handleClose} /> }
        { info.type === 'renameChannel' && <RenameChannelModal close={this.handleClose} /> }
        { info.type === 'deleteChannel' && <DeleteChannelModal close={this.handleClose} /> }
      </Modal>
    );
  }
}

export default ModalWindow;
