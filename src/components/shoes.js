import React from 'react';
import { ShoeItem } from './shoeItem';


//Exportable 'Shoes' class
export class Shoes extends React.Component{
    //render method
    render(){
        // map method
        return this.props.shoes.map( (shoe)=>{
            return <ShoeItem shoe={shoe} ReloadData = {this.props.ReloadData}></ShoeItem>

        })

    }
}



