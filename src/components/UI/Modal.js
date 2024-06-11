import ReactDOM from 'react-dom';
import "./Modal.css"

function Modal(props) {

    const modalRoot = document.getElementById('modal-root');

    const Overlay = props => {
        return (
            <div class='modal'>
                    {props.children}
            </div>
        )
    }

    const Backdrop = props => <div class='backdrop'/>

    return (
    <>
    {ReactDOM.createPortal(
        <Overlay>
            {props.children}
        </Overlay>,
        modalRoot
    )}
    {ReactDOM.createPortal(
        <Backdrop />,
        modalRoot
    )}
    </>
    );
}

export default Modal;