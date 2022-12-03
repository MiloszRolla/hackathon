import React from 'react';
import { useState, useEffect } from 'react';
import BarChart from "../components/BarChart";
import axios from "axios";

function test(){

  const [testData, setTestData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/emotions.json?alt=media&token=c988c5ef-4425-43d5-abd5-defa3d9c38c5');
    setTestData(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    fetchData();

  }, []);



function counter(UserData){
  const a=[]
  
  a[0]=loadText.UserData.filter((data) => data.mood==1).length
  a[1]=loadText.UserData.filter((data) => data.mood==2).length
  a[2]=loadText.UserData.filter((data) => data.mood==3).length
  a[3]=loadText.UserData.filter((data) => data.mood==4).length
  a[4]=loadText.UserData.filter((data) => data.mood==5).length
return a

}

  const [userData, setUserData] = useState({
    labels: [1,2,3,4,5],
    datasets: [
      // {
      //   label: "Mood Lvl",
      //   data: counter(loadText.UserData),
      //   backgroundColor: [
      //     "#FFA69E",
      //     "#D17F7F",
      //     "#FF8282",
      //     "#FFBFBF",
      //     "#FFE8E8"
      //   ]
      // },
    ],
  })

  return <div>
    <center>
    <div style={{width: 400 }}>
    <BarChart chartData={userData}/>
  </div>
  <div>{}</div>
  </center>
  </div>
}

export default test;