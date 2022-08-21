export const receipeOptions = {
  method: "GET",
  url: "https://cokoing-recipe2.p.rapidapi.com/getbycat/Indian%20Desserts",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
  },
};
