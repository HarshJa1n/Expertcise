export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d55aa309dbmshda416743a723afep17be5djsn5682f420c0df",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
