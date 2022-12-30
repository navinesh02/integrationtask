import { TextField } from "@mui/material";
import PropTypes from "prop-types";

export default function InputText(props) {
  const {
    defaultValue = "",
    disabled = "",
    placeholder = "",
    type = "",
    size = "",
    onChange = "",
    helperText = "",
    value = "",
  } = props;
  InputText.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
  };

  return (
    <>
      <TextField
        id="outlined-required"
        disabled={disabled}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        fullWidth={true}
        size={size}
        value={value}
        onChange={onChange}
        helperText={helperText}
      />
    </>
  );
}
