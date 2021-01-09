import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

//Exportable 'ShoeItem' class
export class ShoeItem extends React.Component {


//constructor to bind the method to the instance it is called in
constructor(){
    super();

    this.DeleteShoe = this.DeleteShoe.bind(this);  
}

//delete shoe method
DeleteShoe(){
    //e.preventionDefault();
    console.log("Delete: " + this.props.shoe._id);

      //calls the server
      axios.delete("http://localhost:4000/api/shoes/"+this.props.shoe._id)
      .then(()=>{
          this.props.ReloadData();
      })
      .catch();
}


    //render method
    render() {
        return (
            <div>
                {/* card */}
                <Card>
                    <Card.Header>{this.props.shoe.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.shoe.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.shoe.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                     
                     <Link to={"/edit/"+ this.props.shoe._id} className ="btn btn-outline-success">Edit</Link>
                     <Button variant = "danger" onClick = {this.DeleteShoe}>Delete</Button>
                      <div><br></br></div>
                     <div><br></br></div>
                </Card>
                

            </div>
        );
    }
}



