import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../actions';
import Smurf from './smurf';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(){
    super();
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    }
  }
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  handleChanges = e => {
    e.preventDefault();
    console.log(this.state.smurf.name)
    console.log(this.state.smurf.age)
    console.log(this.state.smurf.height)
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    })
  }

  addSmurf = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf)
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
         return <Smurf smurf={smurf} key={Math.random()}/>
       })}
       <form onSubmit={this.addSmurf}>
          <input type='text' value={this.state.name} placeholder='name' name='name' onChange={this.handleChanges}/>
          <input type='text' value={this.state.age} placeholder='age' name='age' onChange={this.handleChanges}/>
          <input type='text' value={this.state.height} placeholder='height' name='height'onChange={this.handleChanges}/>
          <button onClick={this.addSmurf}>Add Smurf</button>
        </form>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching
  }
}


export default connect(mapStateToProps,
  {
    fetchSmurfs,
    addSmurf
  })(App);
