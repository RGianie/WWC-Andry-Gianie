import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box sx={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
      <SettingsIcon color="primary" fontSize="large" />
      <Typography
        variant="h5"
        component="h1"
        color="secondary"
        fontWeight={700}
      >
        Sinaux
      </Typography>
    </Box>
  );
};

export default Logo;
