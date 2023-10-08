import { Avatar, Box, Stack, Typography } from "@mui/material";

const HeaderProfile = () => {
  return (
    <Stack direction="row" alignContent="center" py={2.5}>
      <Box mr={1}>
        <Typography variant="caption" color="grey" textAlign="end">
          Handicrated by
        </Typography>

        <Typography variant="body2" textAlign="end">
          Jim HLS
        </Typography>
      </Box>

      <Avatar src="/avatar.jpeg" />
    </Stack>
  );
};

export default HeaderProfile;
