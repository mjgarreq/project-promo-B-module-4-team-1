import Hero from "./Hero";
import Preview from "./Preview";
import Form from "./Form";
import PropTypes from "prop-types";

function MainAdd(props) {
  return (
    <main className="main">
          <Hero/>
          <Preview object={props.object}/>
          <Form object={props.object} changeCard={props.changeCard} updateAvatar={props.updateAvatar} setUrl={props.setUrl} url={props.url}/>
    </main>
  )
}

MainAdd.propTypes = {
    object: PropTypes.object,
    changeCard: PropTypes.func,
}

export default MainAdd;