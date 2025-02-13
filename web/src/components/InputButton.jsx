import PropTypes from "prop-types";
import React from 'react';

function InputButton(props) {

  const fr = new FileReader();
  const myFileField = React.createRef();
  const uploadImage = (ev) => {
    ev.currentTarget.files[0];
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

 

  const getImage = () => {
    
    const image = fr.result;

    props.updateAvatar(image , props.inputButton);
  };
  

  return (
    <>
    <label htmlFor={props.inputButton} className="button">{props.textLabel}</label>
    <input className="addForm__hidden " type="file" name={props.inputButton} id={props.inputButton} ref={myFileField} onChange={uploadImage} required />
    </>
  )
}

InputButton.propTypes = {
    forLabel: PropTypes.string,
    textLabel: PropTypes.string,
    nameInput: PropTypes.string,
    idInput: PropTypes.string,
    updateAvatar: PropTypes.func,
}

export default InputButton