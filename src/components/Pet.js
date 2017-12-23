import React from 'react'

export default function Pet(props){

        return (
            <section>
                <header>
                    <h2 className = 'animalName'>{props.name}</h2>
                    <img src={props.imageURL} alt= {props.imageDescription} />
                </header>
                    <main>
                        <dl>
                
                            <dt>Sex:</dt>
                            <dd>{props.sex}</dd>
                            <dt>Age: </dt>
                            <dd>{props.age}</dd>
                            <dt>Breed</dt>
                            <dd>{props.breed}</dd>
                            <dt>Story</dt>
                            <dd>{props.story}</dd>
                        </dl>
                        <button onClick={() => props.onAdoptPet()} type= 'button'>Adopt</button>
                    </main>
            </section>
        )
    }
