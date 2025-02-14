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
        console.log(data)
        if(data.success){
          props.setUrl(data.cardURL)
        } else{
          props.setErrorMessage(`Error en la creación de la tarjeta. ${data.error}`)
          }
          })
      .catch ((error) => {
        console.error ("Error en la solicitud", error);
      });
    };




  return (
    <>
    <button type="submit" className="button--large" onClick={handleClick}>{props.text}</button>
    </>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    setErrorMessage: PropTypes.func,
}


export default Button;