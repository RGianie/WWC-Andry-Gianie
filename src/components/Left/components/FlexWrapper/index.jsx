import Box from "@mui/material/Box";

const FlexWrapper = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        gap: "10px",
        ...sx,
        display: "flex",
      }}
    >
      {children}
    </Box>
  );
};

export default FlexWrapper;
