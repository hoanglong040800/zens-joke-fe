import { useMutation, useQuery } from "react-query";
import { getNextRandomJoke, updateVoteJoke } from "..";
import { IJoke } from "_core/interface";
import { useCookies } from "react-cookie";
import { CookieKey } from "_core/constant";
import { useCallback } from "react";
import { UpdateVoteJokeInput } from "../interface";

const JokeContainer = () => {
  const [cookies, setCookie] = useCookies();
  const { data, isLoading, refetch } = useQuery<null, null, IJoke | null>({
    queryFn: getNextRandomJoke,
    refetchOnWindowFocus: false,
  });

  const { mutateAsync: updateVoteJokeMutate, isLoading: isUpdating } =
    useMutation<null, null, UpdateVoteJokeInput>(updateVoteJoke);

  const handleClickVoteJoke = useCallback(
    async (type: "upvote" | "downvote", jokeId: string | undefined) => {
      if (!jokeId) {
        return;
      }

      const updatedCookie = [...(cookies[CookieKey.readJokeIds] || []), jokeId];
      setCookie(CookieKey.readJokeIds, updatedCookie);

      await updateVoteJokeMutate({ jokeId, type });
      await refetch();
    },
    []
  );

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  if (!data.id) {
    return <p>Out of joke</p>;
  }

  return (
    <div>
      <h4>{data.content}</h4>

      <button
        onClick={() => handleClickVoteJoke("upvote", data.id)}
        disabled={isUpdating}
      >
        Like
      </button>

      <button
        onClick={() => handleClickVoteJoke("downvote", data.id)}
        disabled={isUpdating}
      >
        Dislike
      </button>
    </div>
  );
};

export default JokeContainer;
