
import PropTypes from 'prop-types';

export const InteractivePoint = ({ id, text, top, left, onHover }) => {
    return (
        <div
            className="absolute cursor-pointer"
            style={{ top: top, left: left }}
            onMouseEnter={() => onHover(id)}
            onMouseLeave={() => onHover(null)}
        >
            <span className="bg-red-500 text-white rounded-full p-2">{id}</span>
        </div>
    );
};

InteractivePoint.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    onHover: PropTypes.func.isRequired
};