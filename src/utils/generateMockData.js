export const generateMockData = (count = 5000) => {
  const statuses = ["Active", "Completed", "Pending"];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    projectName: `Project ${i + 1}`,
    latitude: 20 + Math.random() * 10,
    longitude: 75 + Math.random() * 10,
    status: statuses[i % 3],
    lastUpdated: new Date().toISOString(),
  }));
};
