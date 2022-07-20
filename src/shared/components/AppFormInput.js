import PropTypes from "prop-types";

const AppFormInput = props => {
    const {id, label, value, onValueChange, type = 'text'} = props;
    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>
            <input id={id} type={type} value={value} onChange={onValueChange}/>
        </>
    )
}
AppFormInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    onValueChange: PropTypes.func
}
export default AppFormInput;
