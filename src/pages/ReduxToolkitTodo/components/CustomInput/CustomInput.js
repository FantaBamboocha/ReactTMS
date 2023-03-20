import { TextField } from "@mui/material";

const CustomInput = ({
  size = "small",
  label,
  type = "text",
  name,
  value,
  onChange,
  required = true,
}) => {
  return (
    <TextField
      size={size}
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default CustomInput;
