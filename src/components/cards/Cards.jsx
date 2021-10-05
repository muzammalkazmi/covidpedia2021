import React from 'react'
import CountUp from 'react-countup'
import cx from 'classnames'
import styles from './cards.module.css'
import {Grid,Card,CardContent,Typography} from '@material-ui/core'
const Cards=({value:{confirmed,recovered,deaths,lastUpdate}})=> {
    console.log(confirmed,recovered,deaths,lastUpdate)
    if(!confirmed){
        return 'Loading...'
    }
    

    return (
        <div>
            <Grid container spacing={3} >
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.confirmed)}>
                    <CardContent>
                        <Typography>Infected</Typography>
                        <Typography>
                            <CountUp start={0} end={confirmed.value} duration={4} seperator=',' />
                        </Typography>
                        <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography>Recovered</Typography>
                        <Typography><CountUp
                        start={0} end={recovered.value} duration={4} seperator=',' /></Typography>
                        <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography>Deaths</Typography>
                        <Typography>
                            <CountUp start={0} end={deaths.value} duration={4} seperator=',' /></Typography>
                        <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )
    }
    export default Cards;
    
   

