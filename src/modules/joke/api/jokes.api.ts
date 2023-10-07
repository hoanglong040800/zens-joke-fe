import { BASE_API_URL } from "_core/constant";
import { UpdateVoteJokeInput } from "../interface";

const ROUTE = `${BASE_API_URL}/jokes`;

export const getNextRandomJoke = async () => {
  const response = await fetch(`${ROUTE}/random`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });

  return response.json();
};

export const updateVoteJoke = async ({ jokeId, type }: UpdateVoteJokeInput) => {
  const response = await fetch(`${ROUTE}/${jokeId}/${type}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
  });

  return response.json();
};
