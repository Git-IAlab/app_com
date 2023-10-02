import { Fragment } from "react";
import "./App.css";

const texto = "Esto es un string";
const number = 123;
const booleano = true;
const array = [1, 2, 3, " Hola 8 semestre"];
const funtion = () => "Esto es una funcion";
const object = { nombre: "Juan", apellido: "Perez" };
const fecha = new Date();

export const Uno = () => {
  return (
    <>
      <p>{texto}</p>
      <p>{number}</p>
      <p>{booleano}</p>
      <p>{array}</p>
      <p>{funtion()}</p>
      <p>{[object.nombre, object.apellido]}</p>
      <p>{JSON.stringify(object)}</p>
      <p>{JSON.stringify(fecha)}</p>
    </>
  )
}