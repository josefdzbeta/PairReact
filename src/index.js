import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Formulario
class Formulario extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Inputs />
        </form>
      </div>
    );
  }
}

class Inputs extends React.Component {
  render() {
    return (
      <div>
        <label>
          Nombre
          <input type="text" placeholder='Nombre' />
        </label>
        <br />
        <label>
          Apellidos
          <input type="text" placeholder='Apellidos' />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}


/* MENU */
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

/* Prueba para formulario */

/* function Input(prop) {
  return(
    <input></input>
  )
}

function Label(prop){
  return(
  <label></label>
  )
    
}

function Formulario(){
  return(
    <form>
      
    </form>
  )
} */
/*</li>{ 
  function charFormulario(props) {
  return (
  <form>

    //METER AQUI LOS INPUT Y LABELS
    
    <button className="boton" onClick={this.nuevasCartas()}>

    </button>
  </form>
  );
} 
//}*/


function Cartas() {


  return (
    <RandomCartas />
    /* <div className="cartas">
      <RandomCartas />
    </div> */
  );
}

function RandomCartas() {
  
  let numeroRand = generarRandom(3, 6)
  let arrayCartas = []
  let arrayTitulos = ['Hola mundo', 'FFX', 'Yate', 'Jeff Bezos', 'React']
  let arraytexto = ['Este es el primer texto escrito', 'Yo precedo al antepenúltimo', '¿Quién soy?', 'Estoy entre el tercero y el último', 'Estoy al final']

  /* Bucle que genera una estructura de cartas con titulo y texto aleatorios */
  for (let i = 0; i < numeroRand; i++) {
    arrayCartas.push(
      <div key={i + 1}>
        <p>{arrayTitulos[generarRandom(1,5)]}</p>
        <p>{arraytexto[generarRandom(1,5)]}</p>
      </div>)
  }

  return (
    <div>{arrayCartas}</div>
  )
  /* return (
    <div>1</div>
  ); */
}

class Tablero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {

  }

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
        <div className="web-cartas">
          <Cartas />
        </div>
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
