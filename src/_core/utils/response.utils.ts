export const extractResponse = async (res: Response) => {
  const formatRes = await res.json();

  return formatRes.data;
};
