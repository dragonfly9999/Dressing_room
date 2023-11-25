const data = "../data/Data.json";

export const getDataProduct = async () => {
  try {
    const response = await axios({
      url: data,
      method: "GET",
    });
    console.log("response: ", response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const typeOfData = async (type) => {
  try {
    const resultCheck = await axios.get(data);
    const fillCheckData = resultCheck.data.tabPanes.filter(
      (item) => item.type === type
    );
    return fillCheckData;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
