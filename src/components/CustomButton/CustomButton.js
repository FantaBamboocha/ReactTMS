import { Button } from "@mui/material";
import PropTypes from "prop-types";

import { styles } from "./styles";

const CustomButton = ({
  text,
  onClick,
  disabled = false,
  variant = "outlined",
  color,
  size = "small",
  type,
}) => {
  return (
    <Button
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      color={color}
      type={type}
      // sx={styles("green")}
      size={size}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  //   color: PropTypes.oneOf([red, green]),
  variant: PropTypes.string,
};

export default CustomButton;
