import { Box, BoxProps, Typography } from "@mui/material";

const Banner = (props?: BoxProps) => {
  return (
    <Box width="100%" bgcolor="#54c484" py={8} {...props}>
      <Box>
        <Typography variant="h3" color="white" textAlign="center">
          A joke a day keeps the doctor away
        </Typography>

        <Typography variant="body2" color="white" textAlign="center">
          If you joke wrong way, your teeth have to pay. (Serious)
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
