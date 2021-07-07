import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';


class Smurf extends React.Component {
  constructor(props){
      super(props);
    this.state = {

    }
  }

  deleteSmurf = (id) => {
    console.log('here');
    this.props.deleteSmurf(id)
  }



  render() {
    return (
      <div>
        <p>{this.props.smurf.name}</p>
        <p>{this.props.smurf.age}</p>
        <p>{this.props.smurf.height}</p>
        <button onClick={() => this.deleteSmurf(this.props.smurf.id)}>Delete Smurf</button>
      </div>
    )
  }
}

const MapStateToProps = state => {
  return {

  }
}


export default connect(MapStateToProps,
  {
    deleteSmurf
  })(Smurf);
