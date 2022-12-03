import React from 'react';
import { useState } from 'react';
import BarChart from "../components/BarChart";
import {UserData} from './data'
function counter(UserData){
  const a=[]
  
  a[0]=UserData.filter((data) => data.mood==1).length
  a[1]=UserData.filter((data) => data.mood==2).length
  a[2]=UserData.filter((data) => data.mood==3).length
  a[3]=UserData.filter((data) => data.mood==4).length
  a[4]=UserData.filter((data) => data.mood==5).length
return a

}
function test(){
  const [userData, setUserData] = useState({
    labels: [1,2,3,4,5],
    datasets: [
      {
        label: "Mood Lvl",
        data: counter(UserData),
        backgroundColor: [
          "#FFA69E",
          "#D17F7F",
          "#FF8282",
          "#FFBFBF",
          "#FFE8E8"
        ]
      },
    ],
  })

  return <div>
    <center>
    <div style={{width: 400 }}>
    <BarChart chartData={userData}/>
  </div>
  </center>
  </div>
}

export default test;