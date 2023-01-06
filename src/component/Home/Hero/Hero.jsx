import React from 'react'
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Typed from 'react-typed';
// import LoginModal from "";
const Hero = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
    
    return (
      <Grid container spacing={4}>
        <Grid
          item
          container
          xs={12}
          md={6}
          alignItems={"center"}
          // marginLeft={50}
          justifyContent={"space-around"}
          style={{ maxWidth: "100%", flexBasis: "100%" }}
        >
          <Box
            data-aos={isMd ? "fade-right" : "fade-up"}
            paddingLeft={isMd && 2}
            p={1}
          >
            <Box marginBottom={2}>
              <Typography
                variant="h2"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                Easily Decide you Career <br />
                Start Your{" "}
                <Typography
                  color={"primary"}
                  component={"span"}
                  variant={"inherit"}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.3
                    )} 0%)`,
                  }}
                >
                  <Typed
                    strings={["Career", "Decision"]}
                    typeSpeed={100}
                    loop={true}
                  />
                </Typography>
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                GET THE RIGHT GUIDANCE TO LEAP THROUGH YOUR CAREER
                <br />
                Discover Your Perfect Career
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}
            >
              {/* <Link to={()=>{if(LoginModal.isSignUp==true)
              {
                return "/testing";
              }
            }}> */}
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Start now
                </Button>
              {/* </Link> */}
            </Box>
          </Box>
          <Box>
            <img
              src="aman.jpg"
              alt=""
              borderRadius={2}
              height={400}
              width={300}
              marginLeft={50}
            />
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent={"center"}
          xs={12}
          md={6}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {/* <div style={{ display: "flex", justifyContent: "center", marginLeft:"0" }}> */}

          {/* </div> */}
        </Grid>
      </Grid>
    );
}

export default Hero
