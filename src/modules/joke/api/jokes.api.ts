export const getNextRandomJoke = async () => {
  const response = await fetch("http://localhost:5000/jokes/random", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });

  return response.json();
};
