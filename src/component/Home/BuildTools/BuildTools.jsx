import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



const BuildTools = () => {
   

    return (
      <Box>
        <Box marginBottom={4}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              align={"center"}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Are you confused when you about your future ?
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
              align={"center"}
            >
              Don't worry we got you covered we will guide you, What your future
              holds, we will tell you based on your choice.
            </Typography>
          </Box>
        </Box>
        {/* <Box display="flex" justifyContent="center"> */}
        <div style={{display:"flex",justifyContent:"center"}}>
        <img
          src="school.jpg"
          alt=""
          height="350"
          width="700"
          
        />
        </div>
        {/* <Box
            sx={{ width: { xs: "100%", md: "50%" } }}
            width={50}
            component={SyntaxHighlighter}
            language={"javascript"}
            style={vs2015}
            padding={`${theme.spacing(2)} !important`}
            borderRadius={2}
            margin={`${theme.spacing(0)} !important`}
            bgcolor={"#black !important"}
          >
            {`
> Hi there how are u doing
// Or
> Hi there how are u doing

// Hi there how are u doing


> Hi there how are u doing
// Or
> Hi there how are u doing

// LiveReload started. Opening localhost:3000
        `}
          </Box> */}
      </Box>
    );
}

export default BuildTools
