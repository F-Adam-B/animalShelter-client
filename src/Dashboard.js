import React from 'react';
import Pet from './components/Pet';
import { connect } from 'react-redux';
import {fetchCat, fetchDog, adoptDog, adoptCat} from './actions/index';


export class Dashboard extends React.Component{
  
   componentDidMount() {
     this.props.dispatch(fetchCat())
     this.props.dispatch(fetchDog())
   }
   

  render(){

    return(
      <div className='main-parent-container'>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Pet {...this.props.dogToAdopt} onAdoptPet = {() => this.props.dispatch(adoptDog())}/>
            </div>
            <div className="col-sm-6">
              <Pet {...this.props.catToAdopt} onAdoptPet = {() => this.props.dispatch(adoptCat())}/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
  catToAdopt: state.cat.data,
  dogToAdopt: state.dog.data
  } 
}

export default connect(mapStateToProps)(Dashboard);
