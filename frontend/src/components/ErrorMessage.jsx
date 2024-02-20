import PropTypes from 'prop-types';

function ErrorMessage({ message }) {
    return (
        <div className="text-red-500 text-center mb-4">
            <p>{message}</p>
        </div>
    );
}

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;
