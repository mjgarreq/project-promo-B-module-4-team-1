import { useState } from "react";
import Button from "./Button";
import InputButton from "./InputButton";


function Form(props) {

    const handleChangeInput =(ev) =>{
        const input = ev.target.id;
        const value = ev.target.value;
        props.changeCard(input, value);
    }

    const [errormessage, setErrorMessage] = useState ("* Revisa que no haya campos en rojo y que se hayan subido las fotos correctamente.")

  return (
    <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleChangeInput} required/>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChangeInput} required/>
          <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChangeInput} required/>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChangeInput} required/>
          </div>         
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChangeInput} required/>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput} required></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput} required/>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput} required/>
        </fieldset>

        <fieldset className="addForm__group--upload">
          <InputButton inputButton="image" textLabel="Subir foto del proyecto" updateAvatar={props.updateAvatar}/>
          <InputButton inputButton="photo" textLabel="Subir foto de la autora" updateAvatar={props.updateAvatar}/>
          <Button card={props.object} text="Crear proyecto" setUrl={props.setUrl} setErrorMessage={setErrorMessage}/>
          
        </fieldset>
    
        <fieldset className="fieldset__url">
        {props.url ? <a className="url" href={props.url} target="_blank">Ver Tarjeta</a>: <p className="errormessage">  {errormessage} </p>}
        </fieldset>
      </form>
  )
}

export default Form