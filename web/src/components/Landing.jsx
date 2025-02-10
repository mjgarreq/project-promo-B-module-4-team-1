
import HeroLanding from "./HeroLanding";
import Card from "./Card";
import { useState } from "react";
import "../styles/LandingCards.css";


function Landing() {
  const [card, setCard] = useState({
      name: "",
      slogan: "",
      technologies:"",
      repo:"",
      demo:"",
      desc:"",
      autor:"",
      job:"",
      image:"",
      photo: "",
    })


  return (

    <>
    <main className="main_landing">
    <HeroLanding/>

    <div className="landing_cards">

    <Card data ={card}/>
    <Card data ={card}/>
    <Card data ={card}/>
    <Card data ={card}/>
    </div>
    </main>
    </>
  )
}

export default Landing