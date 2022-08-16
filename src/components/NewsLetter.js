import { Box, Container, Grid, Typography } from "@mui/material";
import hotLeaf from "../images/PngItem_507689.png";


const NewsLetter = () => {

    return(
        
            <Grid container>
                <Box align="center" padding={5}>
                    <Typography variant="h3" fontFamily="Luckiest Guy" color="secondary" pt={3}>Subscribe to our Newsletter</Typography>
                    <Grid item display="flex" justifyContent={"center"} alignItems="center" pt={4}>
                        <Box component="img" sx={{ width:"5%" }} src={hotLeaf} />
                        <Typography variant="h5" fontWeight="bold" pl={3}>Receive weekly emails about The Hot Box</Typography>
                    </Grid> 
                </Box>

            </Grid>
        
    )
}

export default NewsLetter;