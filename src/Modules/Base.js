import {Grid} from "@mui/material";
import SideBar from "./SideBar";
import ButtonAppBar from "../nav-bar/ButtonAppBar";
const Base= ()=> {
    return <div> 
      <ButtonAppBar/>
      <Grid container spacing={2} className="base-container mt-0">
    <Grid xs={3} md={3}>
      <SideBar/>
    </Grid>
    <Grid xs={9} md={9} style={{background:"white"}}>
     
     Landing page
    </Grid>
  </Grid>
  </div>
}

export default Base;