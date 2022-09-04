import Box from "@mui/material/Box";
import Logo from "./components/Logo";
import PageTitle from "./components/PageTitle";
import PageSubitle from "./components/PageSubtitle";
import Buttons from "./components/Buttons";
import Reviews from "./components/Reviews";

const Left = () => {
  return (
    <Box sx={{ py: 4, maxWidth: "450px", px: 3 }}>
      <Logo />
      <Box sx={{ mt: 14 }}>
        <PageTitle />
        <PageSubitle />
        <Buttons />
        <Reviews />
      </Box>
    </Box>
  );
};

export default Left;
