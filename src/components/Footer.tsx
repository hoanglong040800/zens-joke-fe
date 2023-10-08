import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%" >
      <Box maxWidth="700px" display="flex" flexDirection="column" mt={3}>
        <Typography variant="body2" color="grey" textAlign="center">
          This website is created as part of HLsolutions program. The materials
          contained on this website are provided for general information only
          and do not consitute any form of advice. HLS assumes no responsibility
          for the accuracy of any particular statement and accepts no liability
          for any loss or damge which may arise from reliance on the information
          contained on this site.
        </Typography>

        <Typography textAlign="center">Copyright 2021 HLS</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
