import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Dashboard } from './Dashboard';
let dog = {
    imageURL: 'https://vetstreet.brightspotcdn.com/dims4/default/ef88942/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fec%2Fedb760a8af11e0a0d50050568d634f%2Ffile%2Fnova-scotia-duck-tolling-retriever-5-645mk070411.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Uki',
    sex: 'Female',
    age: 2,
    breed: 'Duck Toller',
    story: 'Owner Passed away'
}

let cat = {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 1,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }


ReactDOM.render(<Dashboard dogToAdopt = {dog} catToAdopt = {cat} />, document.getElementById('root'));
registerServiceWorker();
