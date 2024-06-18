import {Grid} from "@mui/material";
const Base= ()=> {
    return <Grid container spacing={2}>
    <Grid xs={3} md={3} style={{background:"blue"}}>
      Area1
    </Grid>
    <Grid xs={9} md={9} style={{background:"white"}}>
      Area2
    </Grid>
  </Grid>
}

export default Base;