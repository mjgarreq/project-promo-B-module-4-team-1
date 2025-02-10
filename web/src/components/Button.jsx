import PropTypes from "prop-types";

function Button(props) {
  const handleClick=(ev)=>{
    ev.preventDefault();
    fetch("https://dev.adalab.es/api/projectCard",{
      body: JSON.stringify(props.card),
      method:"POST",
      headers: {
          "Content-Type":"application/json"
      }
  }).then(resp =>resp.json())
  .then((data)=>{
    if(data.success){
      props.setUrl(data.cardURL)
    }
    
  })
  };
  return (
    <button className="button--large" onClick={handleClick}>{props.text}</button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
}


export default Button;