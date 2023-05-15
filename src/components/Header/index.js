import React from 'react';
import { Box,Grid,Typography,Button } from '@material-ui/core';
import { useAuth0 } from "@auth0/auth0-react";
export default (props) => {
  const{user, loginWithRedirect , isAuthenticated,logout} = useAuth0();
  console.log("current user",user);
     return(
  
  <Box py={10} bgcolor="secondary.main" color="white">
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
        
          <Typography variant="h5"> {isAuthenticated && <h1> Hi , {user.name}</h1>} Job Search </Typography>
          
          <div style={{ display: "flex", flexDirection: "column" }}>
            {isAuthenticated ? (
              <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              
              variant="contained"
              color="primary"
              disableElevation
            >
              Logout
            </Button>
            ) : (
              <Button onClick={() => loginWithRedirect()} variant="contained" color="primary" disableElevation style={{ marginTop: "9px" }}>Log In</Button>
              
            )}
             {isAuthenticated &&
            <Button
              onClick={props.openNewJobModal}
              variant="contained"
              color="primary"
              disableElevation
              style={{ marginTop: "9px" }}
            >
              Post a Job
            </Button>
                }
            
          </div>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
 }
