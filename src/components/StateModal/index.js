import React from 'react';
import ReactModal from 'react-modal';
import { get } from 'lodash-es';
import './style.scss';
ReactModal.setAppElement('#react-modal')

const StateModal = ({ open, data, handleClose }) => {

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    }
  }

  return (
    <div className="stats-modal">
      <ReactModal
        isOpen={open}
        contentLabel="Stats Modal"
        style={modalStyle}
      >
        <div className="stats-modal-close" onClick={handleClose}>
          <i className="fa fa-times"></i>
        </div>
        <h1 className="stats-modal-title">{get(data, 'leader')}</h1>
        <div className="stats-modal-container">
          <div className="row stats-modal-container-row">
            <div className="col-6">Match Wins:</div>
            <div className="col-6">28</div>
            <div className="col-6">Matches Hosted:</div>
            <div className="col-6">18</div>
            <div className="col-6">Match Played:</div>
            <div className="col-6">956</div>
            <div className="col-6">Friends Circle:</div>
            <div className="col-6">466</div>
            <div className="col-6">Total:</div>
            <div className="col-6">1458</div>
          </div>
        </div>
      </ReactModal>
    </div>
  )
}

export default StateModal;