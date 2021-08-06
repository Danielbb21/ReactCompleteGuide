import React, { Component } from "react";
import Trasition from 'react-transition-group/Transition';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from "react-transition-group/Transition";

class App extends Component {

  state = {
    modaIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({ modaIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modaIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(preState => ({ showBlock: !preState.showBlock }))}>Toogle</button>
        <br />
        <br />
        <Transition mountOnEnter in={this.state.showBlock} timeout={300} unmountOnExit
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {state => (<div style={{ backgroundColor: 'red', width: 100, height: 100, margin: 'auto', transition: 'opacity 1s ease-out', opacity: state === 'exiting' ? 0 : 1 }}></div>)}

        </Transition>

        <Modal show={this.state.modaIsOpen} closed={this.closeModal} />

        {this.state.modaIsOpen && <Backdrop show />}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
