import axios from "axios";

export const fetchData = async (id: number) => {
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};
