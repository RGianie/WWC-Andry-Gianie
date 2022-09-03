import SettingsIcon from "@mui/icons-material/Settings";
import { Typography } from "@mui/material";
import FlexWrapper from "../FlexWrapper";

const Logo = () => {
  return (
    <FlexWrapper sx={{ gap: "5px" }}>
      <SettingsIcon color="primary" fontSize="large" />
      <Typography
        variant="h5"
        component="h3"
        color="secondary"
        fontWeight={900}
      >
        Sinaux
      </Typography>
    </FlexWrapper>
  );
};

export default Logo;
