import { useQuery } from "react-query";
import { getNextRandomJoke } from "..";
import { IJoke } from "_core/interface";
import { useCookies } from "react-cookie";
import { CookieKey } from "_core/constant";

const JokeContainer = () => {
  const [cookies, setCookie] = useCookies();
  const { data, isLoading, refetch } = useQuery<null, null, IJoke>(
    "getNextRandomJoke",
    getNextRandomJoke
  );

  const handleClickVoteJoke = (
    type: "upvote" | "downvote",
    jokeId: string | undefined
  ) => {
    if (!jokeId) {
      return;
    }

    const updatedCookie = [...(cookies[CookieKey.readJokeIds] || []), jokeId];

    console.log(type);

    setCookie(CookieKey.readJokeIds, updatedCookie);
    refetch();
  };

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h4>{data.content}</h4>

      <button onClick={() => handleClickVoteJoke("upvote", data.id)}>
        Like
      </button>

      <button onClick={() => handleClickVoteJoke("downvote", data.id)}>
        Dislike
      </button>
    </div>
  );
};

export default JokeContainer;
