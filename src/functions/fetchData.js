import axios from "axios";

//Fetch the data from DB and set the state Data
export const fetchData = async (url, setData, setIsLoading) => {
  try {
    const response = await axios.get(url);
    setData(response.data);
    setIsLoading(false);
    // console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
