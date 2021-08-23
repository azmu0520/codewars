import { Fragment } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
  return <BackDrop onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <UIModal>
      <div>{props.children}</div>
    </UIModal>
  );
};

const portalElemnt = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElemnt
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElemnt
      )}
    </Fragment>
  );
};

export default Modal;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.75);
`;

const UIModal = styled.div`
  position: fixed;

  top: 30vh;
  left: 30%;
  width: 40%;

  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  z-index: 1;
`;

const Wrap = styled.div``;
