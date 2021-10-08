

import React,{useState,useEffect} from 'react'
import {Line}from 'react-chartjs-2' 
import { chartApi } from '../../api'
import styles from './chart.module.css'


export default function Chart() {
     const [dailyData,setDailyData]=useState([]);
      useEffect(()=>{
         const dailyfetchedData=async()=>{
             setDailyData(await chartApi() )
         }
         dailyfetchedData()
     },[dailyData])
     const lineChart=(
        dailyData.length?
    
            <Line
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    label:'confirmed',
                    data:dailyData.map(({confirmed})=>confirmed),
                    borderColor:'blue',
                    fill:false
                },
                {
                    label:'deaths',
                    data:dailyData.map(({deaths})=>deaths),
                    borderColor:'red',
                    fill:false

                }]
            }}

            />  :null
     )
        
    
    return (
           <div className={styles.container}>
               {lineChart }
           </div>
        
    )
}
