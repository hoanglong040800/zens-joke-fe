import { Box } from "@mui/material";
import HeaderProfile from "./HeaderProfile";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignContent="center"
      mx={10}
      bgcolor="white"
      height="90px"
    >
      <img src="/hl-solution.png" />

      <HeaderProfile />
    </Box>
  );
};

export default Header;
