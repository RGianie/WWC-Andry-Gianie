import { Typography, Box } from "@mui/material";
import FlexWrapper from "../FlexWrapper";
import iconStar from "../../../../assets/images/star4.png";
import iconWoman from "../../../../assets/images/woman.jpg";
import classes from "./style.module.css";

const PageTitle = () => {
  return (
    <>
      <FlexWrapper sx={{ gap: "20px" }}>
        <Typography variant="h3" component="h1">
          Grow your skill
        </Typography>
        <img src={iconWoman} className={classes.img1} alt="" />
      </FlexWrapper>

      <FlexWrapper sx={{ gap: "20px" }}>
        <Box sx={{ width: "70px", border: 1, borderColor: "primary.main" }} />
        <Typography variant="h3" component="h1">
          and find your
        </Typography>
      </FlexWrapper>

      <FlexWrapper sx={{ gap: "20px" }}>
        <Typography variant="h3" component="h1">
          perfect tutor.
        </Typography>
        <img src={iconStar} height="32" alt="" />
      </FlexWrapper>
    </>
  );
};

export default PageTitle;
