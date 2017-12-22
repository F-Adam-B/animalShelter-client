import React from 'react';
import Pet from './components/Pet'


export class Dashboard extends React.Component{
  render(){
    return(
      <div>
        <Pet {...this.props.dogToAdopt}/>
        <Pet {...this.props.catToAdopt}/>
      </div>
    )
  }
}
