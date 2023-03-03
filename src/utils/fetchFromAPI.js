import axios from 'axios';

// Define the base URL for the YouTube API's search endpoint
const base_url = 'https://youtube-v31.p.rapidapi.com';

// Define an options object containing the parameters and headers for the API request
const options = {
  // Set the URL to the base URL defined above
  url: base_url,
  // Set the parameters for the request, in this case setting the maximum number of results to 50
  params: {
    maxResults: '50'
  },
  // Set the headers for the request, including the API key and host
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, 
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// Define a function called fetchFromAPI that takes a URL parameter and makes an HTTP GET request to the YouTube API
export const fetchFromAPI = async (url) => {
  // Use axios to make the GET request, concatenating the provided URL parameter to the base URL
  const {data} = await axios.get(`${base_url}/${url}`, options);
   return data;
}