import PropTypes from "prop-types";

const AppButton = props => {
    const {handleClick, label, disabled} = props;
    return <button onClick={handleClick} disabled={disabled}>{label}</button>
}
AppButton.propTypes = {
    label: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
}
export default AppButton;
