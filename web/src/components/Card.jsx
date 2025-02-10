import PropTypes from "prop-types";
import avatar from "../images/avatar.webp"

function Card(props) {
  return (
    <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

          <div className="card__author">
            <div className="card__authorPhoto">
              <img src={props.data.photo || avatar} alt="" className="card__authorImg"/>
            </div>
            <p className="card__job">
              {props.data.job || "Full Stack Developer"}
            </p>
            <h3 className="card__name">{props.data.autor || "Anacleta Pérez"}</h3>
          </div>
      
          <div className="card__project">            
            <h3 className="card__name">{props.data.name || "Mi primera web en React"}</h3>
            <p className="card__slogan">{props.data.slogan || "No lo entiendo, pero lo hago" }</p>
            <h3 className="card__descriptionTitle">Descripción proyecto</h3>
            <p className="card__description">{props.data.desc || "Aprendiendo a hacer una web usando React"}</p>

            <div className="card__technicalInfo">
              <p className="card__technologies">{props.data.technologies || "JavaSricpt y React"}</p>
          
              <a className="icon icon__www" href={props.data.demo} title="Haz click para ver el proyecto online" target="_blank">
                Web link
              </a>
              <a className="icon icon__github" href={props.data.repo} title="Haz click para ver el código del proyecto" target="_blank">
                GitHub link
              </a>
            </div>
          </div>
        </article>
  )
}

Card.propTypes = {
    data: PropTypes.object,
}

export default Card;