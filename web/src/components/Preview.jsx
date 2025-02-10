import Card from "./Card";
import PropTypes from "prop-types";
import ebook from "../images/ebook-example.jpg"

function Preview(props) {
  return (
    <section className="preview">
        <div className="projectImage">
          <img src={props.object.image || ebook} alt="" className="projectImage__Img"/>
        </div>
        <Card data={props.object}/>
    </section>
  )
}


Preview.propTypes = {
    object: PropTypes.object,
}

export default Preview