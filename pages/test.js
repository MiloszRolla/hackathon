import React from 'react';
import { useState, useEffect } from 'react';
import BarChart from "../components/BarChart";
import axios from "axios";

function Test(){

  const [testData, setTestData] = useState([]);
  const h = counter(testData)
  console.log(h)
  const [userData, setUserData] = useState({
    labels: [1,2,3,4,5],
    datasets: [
       {
         label: "Mood Lvl",
         data:
         [].map((v,i)=>h[i]),
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
  const fetchData = async () => {
    const res = await axios.get('https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/emotions.json?alt=media&token=c988c5ef-4425-43d5-abd5-defa3d9c38c5');
    setTestData(res.data)
    setUserData({
      labels: [1,2,3,4,5],
      datasets: [
         {
           label: "Mood Lvl",
           data:
           counter(testData),
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
    console.log(res.data)
  }

  useEffect(() => {
    fetchData();


  }, []);



function counter(testData){
  const ab=new Array(5).fill(0)
  ab[0]=testData.filter((data) => data.mood==1).length
  ab[1]=testData.filter((data) => data.mood==2).length
  ab[2]=testData.filter((data) => data.mood==3).length
  ab[3]=testData.filter((data) => data.mood==4).length
  ab[4]=testData.filter((data) => data.mood==5).length
  let k=ab.map((v) => v);
return k

}
  
  return <div>
    <center>
    <div style={{width: 400 }}>
    <BarChart chartData={userData}/>
  </div>
  <div>{counter(testData)}</div>
  </center>
  </div>
}

export default Test;