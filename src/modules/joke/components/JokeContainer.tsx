import { useMutation, useQuery } from "react-query";
import { getNextRandomJoke, updateVoteJoke } from "..";
import { IJoke } from "_core/interface";
import { useCookies } from "react-cookie";
import { CookieKey } from "_core/constant";
import { UpdateVoteJokeInput } from "../interface";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const JokeContainer = () => {
  const [cookies, setCookie] = useCookies();
  const { data, isLoading, refetch } = useQuery<null, null, IJoke | null>({
    queryFn: getNextRandomJoke,
    refetchOnWindowFocus: false,
  });

  const { mutateAsync: updateVoteJokeMutate, isLoading: isUpdating } =
    useMutation<null, null, UpdateVoteJokeInput>(updateVoteJoke);

  const handleClickVoteJoke = async (
    type: "upvote" | "downvote",
    jokeId: string | undefined
  ) => {
    if (!jokeId) {
      return;
    }

    const updatedCookie = [...(cookies[CookieKey.readJokeIds] || []), jokeId];
    setCookie(CookieKey.readJokeIds, updatedCookie);

    await updateVoteJokeMutate({ jokeId, type });
    await refetch();
  };

  if (isLoading || !data) {
    return <CircularProgress />;
  }

  if (!data.id) {
    return (
      <Typography variant="h4">
        That's all the jokes for today! Come back another day!
      </Typography>
    );
  }

  return (
    <Box maxWidth="700px">
      <Typography variant="body1">{data.content}</Typography>

      <Divider sx={{ marginTop: 3 }} />

      <Stack direction="row" gap={3} mt={3} justifyContent="center">
        <Button
          sx={{ bgcolor: "#2b7bda", width: "200px" }}
          variant="contained"
          onClick={() => handleClickVoteJoke("upvote", data.id)}
          disabled={isUpdating}
        >
          This is Funny!
        </Button>

        <Button
          sx={{ bgcolor: "#54c484", width: "200px" }}
          variant="contained"
          onClick={() => handleClickVoteJoke("downvote", data.id)}
          disabled={isUpdating}
        >
          This is not funny
        </Button>
      </Stack>
    </Box>
  );
};

export default JokeContainer;
