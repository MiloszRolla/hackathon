import Head from 'next/head'
import Image from 'next/image'
import EventCard from '../components/eventCard/eventCard'
import styles from '../styles/Home.module.css'

export default function Home() {

  const exampleTask = {
    category: "Meet"
  };

  return (
    <EventCard data={exampleTask}/>
  )
}
