import { generateMockData } from "../utils/generateMockData";

const DATA = generateMockData(5000);

export const fetchGeoData = async (page = 1, limit = 100) => {
  await new Promise((res) => setTimeout(res, 300));

  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    data: DATA.slice(start, end),
    total: DATA.length,
  };
};
