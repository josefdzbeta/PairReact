import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Formulario e inputs Jose Angel
class Formulario extends React.Component {
  constructor() {
    super();
    this.state = {
      //Inicializamos el estado de submit a falso
      isSubmitted: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({
     [event.target.name]: event.target.value, 
      inpuntChanged: true
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    //Asignar valor verdadero para poder mostrar las cartas
    this.setState({isSubmitted: true})

  }
  render(){
  
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <Inputs />
        </form>
        {/*Si el estado de isSubmitted es verdadero, entonces se renderizan las cartas */}
        {this.state.isSubmitted  && <RandomCartas />}
      </div>
  );
  }
}

class Inputs extends React.Component {
  
  render() {
    return (
      <div>
        <label>
          Nombre <br />
          <input type='text' name='nombre' onChange={this.onInputChange} />
        </label>
        <br />
        <label>
          Apellidos <br />
          <input type='text' name='apellido' onChange={this.onInputChange} />
        </label>
        <br />
        <label>
          Contraseña <br />
          <input type='password' name='pass' onChange={this.onInputChange}  />
        </label>
        <br />
        <input type="submit" value="Enviar" />
      </div>
    );
  }
}


/* MENU Dani*/
function Opciones(props) {
  return (
    <li>Opcion {props.num}</li>
  )
}

function Menu() {
  let items = []
  for (let i = 0; i < 3; i++) {
    items.push(<li key={i}><a href='#'>Opcion {i + 1}</a></li>)
  }
  return (
    <ul>
      {items}
    </ul>
  )
}

/*function Cartas() {
  return (
    <RandomCartas />   
  );
}*/

//Listas Random Luis
function RandomCartas() {
  
  let numeroRand = generarRandom(3, 6)
  let arrayCartas = []
  let arrayTitulos = ['Hola mundo', 'Catch Me If You Can', 'The Truman Show', 'The Godfather part II', 'JavaScript']
  let arraytexto = ['Este es el primer texto escrito', 'Yo precedo al antepenúltimo', '¿Quién soy?', 'Estoy entre el tercero y el último', 'Estoy al final']

  /* Bucle que genera una estructura de cartas con titulo y texto aleatorios */
  for (let i = 0; i < numeroRand; i++) {
    arrayCartas.push(
      <div key={i + 1} className="web-cartas">
        <p>{arrayTitulos[generarRandom(1,5)]}</p>
        <p>{arraytexto[generarRandom(1,5)]}</p>
      </div>)
  }

  return (
    <div>{arrayCartas}</div>
  )
  
}


class Web extends React.Component {
  render() {
    return (
      <div className="web">
        <div className="web-menu">
          <Menu />
        </div>
        <div className="web-form">
          <Formulario />
        </div>
         {/* <div className="web-cartas">
          <Cartas />
        </div>   */}
      </div>
    );
  }
}


function generarRandom(min, max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

// ========================================

ReactDOM.render(
  <Web />,
  document.getElementById('root')
);