import { Box, CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";

const AppLayout = ({ leftComponent, rightComponent, children }) => {
  return (
    <Box sx={{ px: 8 }}>
      <CssBaseline />
      <Grid container>
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
