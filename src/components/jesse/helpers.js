const url = process.env.REACT_APP_API_URL;

export const sectorNames = [
  "Basic Materials",
  "Broad",
  "Consumer Cyclicals",
  "Consumer Non-Cyc",
  "Country",
  "Energy",
  "Financials",
  "Healthcare",
  "Industrials",
  "Real Estate",
  "Technology",
  "Utilities",
];

export const getJesseData = async (dataTypeSelected, setData, setIsLoading) => {
  console.log(url);
  const response = await fetch(url + "jesse", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ dataType: dataTypeSelected }),
  });

  const responseData = await response.json();
  setData(responseData.data);
  setIsLoading(false);
};
