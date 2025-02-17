
import HeroLanding from "./HeroLanding";
import Card from "./Card";
import { useEffect, useState } from "react";
import "../styles/LandingCards.css";


function Landing() {
  const [card, setCard] = useState([])

    useEffect ( () =>{
      fetch ("http://localhost:5001/project/list")
      .then ((response) => response.json())
      .then ((data) => {
        console.log(data)
        const projectInfo = data.data.map((card) =>{
          return {
            name: card.name,
            slogan: card.slogan,
            technologies:card.technologies,
            repo:card.repo,
            demo:card.demo,
            desc:card.desc,
            autor:card.autor,
            job:card.job,
            image:card.image,
            photo: card.photo,
          };
        });
        setCard (projectInfo);
      })
    },[])

    console.log (card)
    const infoHtml = card.map((card, index) => <Card key={index} data={card}/>)
  
  return (
    <>
    <main className="main_landing">
    <HeroLanding/>

    <div className="landing_cards">
  
    {infoHtml}
 
    </div>
    </main>
    </>
  )
}

export default Landing