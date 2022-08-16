import { Button, Container, Paper, Typography } from "@mui/material";
import React from "react";
import HotBox from "../images/hotbox.png"
import Bud from "../images/hotboxbud.png"
import Bong from "../images/hotboxbong.png"
import OurBoxes from "./OurBoxes";
import { useNavigate } from "react-router-dom";
import NewsLetter from "./NewsLetter";


export default function Home() {

    let navigate = useNavigate();

    return (
        <React.Fragment> 
            <Typography variant="h2" align="center" sx={{ color:"#2e7d32", fontFamily:"Luckiest Guy", height:"200px", fontWeight:"400", marginTop:"170px"}}>How to <span style={{ color:"#499b4a" }}>get started</span></Typography>
            <Container sx={{ display:"flex", marginTop:"0px"}}>
                <div>
                    <img src={Bud} style={{ height:'100px',marginLeft:"75px", marginTop:"0px", marginBottom:"50px"}} />
                    <Paper sx={{ padding:"15px", marginRight:"50px"}}><span style={{display:"flex", justifyContent:"center", fontWeight:"bold"}}>Step One</span><br/><br/>It seems like copy and pasting information here fucks shit up</Paper>
                </div>
                <div>
                    <img src={Bong} style={{ height:'150px',marginLeft:"140px", marginTop:"-49px", marginBottom:"50px"}} />
                    <Paper sx={{ padding:"15px", marginRight:"50px"}}><span style={{display:"flex", justifyContent:"center", fontWeight:"bold"}}>Step Two</span><br/><br/>It seems like copy and pasting information here fucks shit up</Paper>
                </div>
                <div>
                    <img src={HotBox} style={{height:'140px', marginLeft:"66px"}} />
                    <Paper sx={{ padding:"15px", marginTop:"12px", height:"150px"}}><span style={{display:"flex", justifyContent:"center", fontWeight:"bold"}}>Step Three</span><br/><br/>It seems like copy and pasting information here fucks shit up</Paper>
                </div>
            </Container>
            <br/>
            <Container align="center" sx={{ marginTop:"30px"}}>
                <Button onClick={() => {navigate("/ourproduct",{replcaed:"true"})}} variant="contained" sx={{width:"250px", height:"100px", fontSize:"20px", fontWeight:"700"}}>Get your box today!</Button>
            </Container>
            <NewsLetter />
            <OurBoxes />
            
            
        </React.Fragment>
    )
}