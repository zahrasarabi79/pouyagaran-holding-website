import {Container, Grid} from '@mui/material';
import React from 'react';
import Introduction from './introduction/Introduction';
import PerformanceOverview from './performance-overview/PerformanceOverview';

const AboutUsSection = () => {
    return (
        <Container maxWidth={false} sx={{'&.MuiContainer-root': {px: {sx: '16px', sm: '70px', md: '156px'}}}}>
            <Grid container justifyContent={'space-between'}
                  sx={{marginY: {xs: 0, sm: '75px', md: '150px'}}}>
                <Grid item xs={12} sm={5}>
                    <Introduction/>
                </Grid>
                <Grid item xs={12} sm={5} sx={{direction: "rtl"}}>
                    <PerformanceOverview/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUsSection;
