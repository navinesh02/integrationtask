import {TextField } from "@mui/material";

export default function InputText(props) {
  const {
    defaultValue = "",
    disabled = "",
    placeholder = "",
    type = "",
    size="",
    onChange="",
    helperText="",  
    value="",
  } = props;


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
