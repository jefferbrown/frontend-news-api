import axios from "axios";
export const getNewsApi = async () => {
  const url = "http://localhost:3069/find";

  return await axios(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
