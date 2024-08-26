import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal;
