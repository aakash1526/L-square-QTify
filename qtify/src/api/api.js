import axios from 'axios';

const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return response.data;
  } catch (error) {
    console.error('Error fetching top albums:', error);
    throw error;
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return response.data;
  } catch (error) {
    console.error('Error fetching new albums:', error);
    throw error;
  }
};

export const fetchAllSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all songs:', error);
    throw error;
  }
};
