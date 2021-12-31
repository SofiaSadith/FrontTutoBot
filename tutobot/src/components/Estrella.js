import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './Estrella.css';
export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 3 },
      }}
    >
      
      <Rating name="read-only" value={value} readOnly style={{marginLeft:"85px", top:"-1rem"}}/>
      
    </Box>
  );
}