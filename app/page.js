// import Image from "next/image";
import Header from './ui/Header';
import categories from './lib/config';
import Card from './ui/Card';

const prueba = {
    "id": "232424737647",
    "title": "2023 Dallas Soul Flower Music Fest",
    "image": "https://res.cloudinary.com/iireii/image/upload/v1686104576/Cetav/events/music-001_w50seu.jpg",
    "date": 1687032000000,
    "location": {
    "city": "Dallas",
    "state": "TX",
    "address": "Main Street Garden Park"
    },
    "price": 10
}

export default function Home() {
  return (
    <>
      <Header categories={categories}/>
      <Card obj={prueba}/>
    </>
  );
}
