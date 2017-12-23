import React from 'react';
import Pet from './components/Pet';
import { connect } from 'react-redux';
import {fetchCat, fetchDog, adoptDog, adoptCat} from './actions/index';


export class Dashboard extends React.Component{
  
   componentDidMount() {
     this.props.dispatch(fetchCat())
     this.props.dispatch(fetchDog())
     console.log(this.props, 'this.props')
   }
   

  render(){

    return(
      <div className='dashboard-container'>
        <Pet {...this.props.dogToAdopt} onAdoptPet = {() => this.props.dispatch(adoptDog())}/>
        <Pet {...this.props.catToAdopt} onAdoptPet = {() => this.props.dispatch(adoptCat())}/>
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
