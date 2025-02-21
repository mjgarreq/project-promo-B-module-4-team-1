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
      console.log(props.object)
      let respuesta = false;

      if (props.object.name === "") {
        errorClone.name ='Falta rellenar el nombre del proyecto.';
        respuesta = true; 
      }else{
        errorClone.name = "";
      }
      if (props.object.slogan === "") {
        errorClone.slogan ='Falta rellenar el slogan.';
        respuesta = true; 
      }else{
        errorClone.slogan = "";
      }
      if (props.object.repo === "") {
        errorClone.repo ='Falta la url del repositorio.';
        respuesta = true; 
      }else{
        errorClone.repo = "";
      }
      if (props.object.demo === "") {
        errorClone.demo ='Falta la url de la demo del proyecto.';
        respuesta = true; 
      }else{
        errorClone.demo = "";
      }
      if (props.object.technologies === "") {
        errorClone.technologies ='Falta añadir las tecnologías usadas.';
        respuesta = true; 
      }else{
        errorClone.technologies = "";
      }
      if (props.object.desc === "") {
        errorClone.desc ='Falta rellenar la descripción del proyecto.';
        respuesta = true; 
      }else{
        errorClone.desc = "";
      }
      if (props.object.autor === "") {
        errorClone.autor ='Falta el nombre de la autora.';
        respuesta = true; 
      }else{
        errorClone.autor = "";
      }
      if (props.object.job === "") {
        errorClone.job ='Falta rellenar el trabajo de la autora.';
        respuesta = true; 
      }else{
        errorClone.job = "";
      }
      if (props.object.photo === "") {
        errorClone.photo ='Falta subir la foto de la autora.';
        respuesta = true; 
      }else{
        errorClone.photo = "";
      }
      if (props.object.image === "") {
        errorClone.image='Falta subir la foto del proyecto.';
        respuesta = true; 
      }else{
        errorClone.image = "";
      }
      setErrors(errorClone);
      return respuesta
    }

  return (
    <form className="addForm">
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
          <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleChangeInput} required/>
          <span className="error">{errors.name}</span>

          <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleChangeInput} required/>
          <span className="error">{errors.slogan}</span>
          <div className="addForm__2col">

            <div className="divRepoDemo">
            <input className="addForm__inputB" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleChangeInput} required/>
            <span className="error">{errors.repo}</span>
            </div>
            
            <div className="divRepoDemo">
            <input className="addForm__inputB" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleChangeInput} required/>
            <span className="error">{errors.demo}</span>
            </div>
           
          </div>         
          <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleChangeInput} required/>
          <span className="error">{errors.technologies}</span>
          <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleChangeInput} required></textarea>
          <span className="error">{errors.desc}</span>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleChangeInput} required/>
          <span className="error">{errors.autor}</span>
          <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleChangeInput} required/>
          <span className="error">{errors.job}</span>
        </fieldset>

        <fieldset className="addForm__group--upload">
          <div className="divRepoDemo">
          <InputButton inputButton="image" textLabel="Subir foto del proyecto" updateAvatar={props.updateAvatar}/>
          <span className="error">{errors.image}</span>
          </div>
          
          <div className="divRepoDemo">
          <InputButton inputButton="photo" textLabel="Subir foto de la autora" updateAvatar={props.updateAvatar}/>
          <span className="error">{errors.photo}</span>
          </div>
          
          <Button card={props.object} text="Crear proyecto" setUrl={props.setUrl} setErrorMessage={setErrorMessage} checkValidInput={checkValidInput}/>
          
        </fieldset>
    
        <fieldset className="fieldset__url">
        {props.url ? <a className="url" href={props.url} target="_blank">Ver Tarjeta</a>: <p className="errormessage">  {errormessage} </p>}
        </fieldset>
      </form>
  )
}

export default Form