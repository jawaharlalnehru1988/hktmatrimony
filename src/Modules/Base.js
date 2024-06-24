import {Grid} from "@mui/material";
import SideBar from "./SideBar";
const Base= ()=> {
    return <Grid container spacing={2} className="base-container">
    <Grid xs={3} md={3} style={{background:"blue"}}>
      <SideBar/>
    </Grid>
    <Grid xs={9} md={9} style={{background:"white"}}>
      Area2
    </Grid>
  </Grid>
}

export default Base;