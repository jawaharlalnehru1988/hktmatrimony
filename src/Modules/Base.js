import {Grid} from "@mui/material";
import SideBar from "./SideBar";
import ButtonAppBar from "../nav-bar/ButtonAppBar";
const Base= ()=> {
    return <Grid container spacing={2} className="base-container">
    <Grid xs={3} md={3} style={{background:"blue"}}>
      <SideBar/>
    </Grid>
    <Grid xs={9} md={9} style={{background:"white"}}>
      <ButtonAppBar/>
    </Grid>
  </Grid>
}

export default Base;