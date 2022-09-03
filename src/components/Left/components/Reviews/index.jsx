import { Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import FlexWrapper from "../FlexWrapper";

const Reviews = () => {
  return (
    <FlexWrapper sx={{ gap: "20px" }}>
      <FlexWrapper sx={{ gap: "12px", my: 4, maxWidth: "80%" }}>
        <FlexWrapper
          sx={{ background: "#202020", borderRadius: "5px", padding: 1 }}
        >
          <StarRateIcon color="primary" />
        </FlexWrapper>
        <Typography fontWeight={500}>
          Over five thousand students have given a 5 star review to their tutor
        </Typography>
      </FlexWrapper>
    </FlexWrapper>
  );
};

export default Reviews;
