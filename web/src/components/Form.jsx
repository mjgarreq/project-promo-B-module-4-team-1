import { useState } from "react";
import Button from "./Button";
import InputButton from "./InputButton";


function Form(props) {

    const handleChangeInput =(ev) =>{
        const input = ev.target.id;
        const value = ev.target.value;
        props.changeCard(input, value);
    }

    const [errormessage, setErrorMessage] = useState ("* Revisa que no haya campos en rojo y que se hayan subido las fotos correctamente.");

    const [errors, setErrors] = useState({
      name: "",
      slogan: "",
      repo: "",
      demo: "",
      technologies: "",
      desc: "",
      autor: "",
      job: "",
      photo: "",
      image: ""
    })

    const checkValidInput = () => {
      const errorClone = {...errors}
      if (props.object.name === "") {
        errorClone.name ='Falta rellenar el nombre del proyecto.';
      }
      if (props.object.slogan === "") {
        errorClone.slogan ='Falta rellenar el slogan.';
      }
      if (props.object.repo === "") {
        errorClone.repo ='Falta la URL del repositorio.';
      }
      if (props.object.demo === "") {
        errorClone.demo ='Falta la URL de la demo del proyecto.';
      }
      if (props.object.technologies === "") {
        errorClone.technologies ='Falta añadir las tecnologías usadas.';
      }
      if (props.object.desc === "") {
        errorClone.desc ='Falta rellenar la descripción del proyecto.';
      }
      if (props.object.autor === "") {
        errorClone.autor ='Falta rellenar el nombre de la autora.';
      }
      if (props.object.job === "") {
        errorClone.job ='Falta rellenar el trabajo de la autora.';
      }
      if (props.object.photo === "") {
        errorClone.photo ='Falta subir la foto de la autora.';
      }
      if (props.object.image === "") {
        errorClone.image ='Falta subir la foto del proyecto.';
      }
      setErrors(errorClone);
    }

  return (
    <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleChangeInput} required/>
          <span>{errors.name}</span>
          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChangeInput} required/>
          <span>{errors.slogan}</span>
          <div className="addForm__2col">
            <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChangeInput} required/>
            <span>{errors.repo}</span>
            <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChangeInput} required/>
            <span>{errors.demo}</span>
          </div>         
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChangeInput} required/>
          <span>{errors.technologies}</span>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput} required></textarea>
          <span>{errors.desc}</span>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput} required/>
          {errors.name !== "" ? <span>{errors.name}</span> : <span>Campo completado</span>}
          <span>{errors.autor}</span>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput} required/>
          <span>{errors.job}</span>
        </fieldset>

        <fieldset className="addForm__group--upload">
          <InputButton inputButton="image" textLabel="Subir foto del proyecto" updateAvatar={props.updateAvatar}/>
          <span>{errors.image}</span>
          <InputButton inputButton="photo" textLabel="Subir foto de la autora" updateAvatar={props.updateAvatar}/>
          <span>{errors.photo}</span>
          <Button card={props.object} text="Crear proyecto" setUrl={props.setUrl} setErrorMessage={setErrorMessage} checkValidInput={checkValidInput}/>
          
        </fieldset>
    
        <fieldset className="fieldset__url">
        {props.url ? <a className="url" href={props.url} target="_blank">Ver Tarjeta</a>: <p className="errormessage">  {errormessage} </p>}
        </fieldset>
      </form>
  )
}

export default Form