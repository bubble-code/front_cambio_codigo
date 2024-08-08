import PropTypes from 'prop-types';

export const Tooltip = ({ text }) => {
    return (
        <div className="absolute -top-10 left-5 bg-black text-white p-2 rounded">
            {text}
        </div>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired
};

