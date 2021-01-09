import React from 'react';
import { Shoes } from './shoes';
//axios method to access Json
import axios from 'axios';

//Exportable 'Read' class
export class Read extends React.Component {

//binding
    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }


    //state object
    state = {
        shoes: []
    };

    //DidMount method to import Json data
    componentDidMount() {
        axios.get('http://localhost:4000/api/shoes')
            .then(
                (response) => {
                    //setting shoes to "search" in Json file
                    this.setState({ shoes: response.data })
                }
            )
            //catch method to report error
            .catch(
                (error) => {
                    console.log(error)

                });
    }

     //reloads and searches for information
     ReloadData(){
        axios.get("http://localhost:4000/api/shoes/")

        //allows the fullfilled state methord when everything works
        .then(
            //function method
            (response) => {
                this.setState({ movies: response.data})
            })

            .catch(
                //function method
                (error) => {
                    console.log(error)
                });
            }

    //render method
    render() {
        return (
            <div>
                <h1>Here is the current list of shoes</h1>
                <Shoes shoes={this.state.shoes} ReloadData = {this.ReloadData}></Shoes>
            </div>
        );
    }
}



