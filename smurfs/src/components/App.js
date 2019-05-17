import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
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

    }
  }
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
//  console.log('hi')
//  console.log(this.props.smurfs)
  //console.log('bye')
    return (
      <div className="App">
        {this.props.smurfs.map(smurf => {
         return <Smurf smurf={smurf} />
       })}
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
    fetchSmurfs
  })(App);
