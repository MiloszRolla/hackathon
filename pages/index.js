import React from 'react';
import { useRouter } from 'next/router';


export default function Index() {

  const router = useRouter();

  if (typeof window !== "undefined") {
    const login = localStorage.getItem("login");
    const passwd = localStorage.getItem("passwd");
    login === "admin" && passwd === "1234" ? router.push('/calendar') : router.push('/login');
  }
  

  // return (
  //   <div>index</div>
  // )
}
