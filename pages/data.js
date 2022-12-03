import {useEffect, useState} from "react";
import React from "react";
import axios from "axios";
async function loadText() {
    const response = await fetch('https://firebasestorage.googleapis.com/v0/b/hackathon-d6832.appspot.com/o/emotions.json?alt=media&token=c988c5ef-4425-43d5-abd5-defa3d9c38c5');
    const UserData=await response.json();
   console.log(UserData[0].mood);
}

export default function Data() {


 loadText();
}
