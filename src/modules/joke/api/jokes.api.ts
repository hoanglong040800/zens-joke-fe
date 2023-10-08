import { BASE_API_URL } from "_core/constant";
import { UpdateVoteJokeInput } from "../interface";
import { extractResponse } from "_core/utils";

const ROUTE = `${BASE_API_URL}/jokes`;

export const getNextRandomJoke = async () => {
  const res = await fetch(`${ROUTE}/random`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });

  return extractResponse(res);
};

export const updateVoteJoke = async ({ jokeId, type }: UpdateVoteJokeInput) => {
  const res = await fetch(`${ROUTE}/${jokeId}/${type}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
  });

  return extractResponse(res);
};
