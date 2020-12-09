const BASE_URL = 'https://api.tvmaze.com/schedule';

export const request = async(url, options) => {
  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  const result = await response.json();

  return result;
};
