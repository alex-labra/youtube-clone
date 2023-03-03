import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  //Call fetchFromAPI as soon as SearchFeed loads to fetch data using life cycle hook(useEffect())
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]); //use dependency array to know when to fetch (when searchTerm changes)

  return (

    <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh'
      }}
      
    >
      
      <Typography
        variant='h4'
        fontWeight='bold'
        mb={2}
        sx={{
          color: 'white'
        }}
      >
        Search Results For: <span style={{ color: '#F31503' }}>
          {searchTerm}
        </span> videos
      </Typography>
      
      <Videos videos={videos} />

    </Box>

  )
}


export default SearchFeed