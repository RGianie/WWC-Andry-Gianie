import { Box, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";

const AppLayout = ({ leftComponent, rightComponent }) => {
  return (
    <Box sx={{ px: 8, minWidth: "max-content" }}>
      <CssBaseline />
      <Grid
        container
        sx={{ minWidth: "1200px", maxWidth: "1200px", mx: "auto" }}
      >
        <Grid item xs={6}>
          {leftComponent}
        </Grid>
        <Grid item xs={6}>
          {rightComponent}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppLayout;
