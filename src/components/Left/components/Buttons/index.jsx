import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FlexWrapper from "../FlexWrapper";

const Buttons = () => {
  return (
    <FlexWrapper sx={{ gap: "20px" }}>
      <Button
        sx={{
          fontWeight: "600",
          textTransform: "capitalize",
          color: "#fff",
          borderRadius: "1.2rem",
        }}
        variant="contained"
      >
        Get started
      </Button>
      <Button
        sx={{
          fontWeight: "600",
          textTransform: "capitalize",
          borderRadius: "1.2rem",
        }}
        variant="outlined"
        endIcon={<ArrowRightAltIcon />}
      >
        Browse course
      </Button>
    </FlexWrapper>
  );
};

export default Buttons;
