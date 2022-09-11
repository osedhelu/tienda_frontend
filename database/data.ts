export const getMedian = (arr: any) => {
  arr.sort((a: number, b: number) => a - b);
  const half = Math.floor(arr.length / 2);
  if (arr.length % 2 === 1) {
    return arr[half];
  }
  return (arr[half - 1] + arr[half]) / 2;
};

export const getMedianOfCodeErrors = (decodedCodes: any) => {
  const errors = decodedCodes
    .filter((x: { error: undefined }) => x.error !== undefined)
    .map((x: { error: any }) => x.error);
  const medianOfErrors = getMedian(errors);
  return medianOfErrors;
};

export const defaultConstraints = {
  width: 640,
  height: 480,
};

export const defaultLocatorSettings = {
  patchSize: "medium",
  halfSample: true,
};

export const defaultDecoders = ["ean_reader"];
