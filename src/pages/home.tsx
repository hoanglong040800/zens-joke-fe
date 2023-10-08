import { Box, Divider } from "@mui/material";
import { Banner, Footer, Header } from "components";

import JokeContainer from "modules/joke/components/JokeContainer";

function HomePage() {
  return (
    <>
      <Header />

      <Banner mb={3} />

      <Box display="flex" justifyContent="center" mb={10}>
        <JokeContainer />
      </Box>

      <Divider />

      <Footer />
    </>
  );
}

export default HomePage;
