import React from 'react';
import axios from 'axios';

//Exportable 'Create' class
export class Create extends React.Component {


    constructor() {
        super();

        //Bind methods
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

//Submit method
    onSubmit(e) {
        e.preventDefault()
        alert("Shoe: " + this.state.Title + " " + this.state.Year + ' ' + this.state.Poster);
    
        
        const newShoe = {
        title: this.state.Title,
        year: this.state.Year,
        poster: this.state.Poster
    }
    
    //axios post
    axios.post('http://localhost:4000/api/shoes', newShoe)

    //reports
    .then((res)=>{
        console.log(res);
    })  
    .catch((err)=>{
        console.log(err);
    });
}


    //ChangeTitle method
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    //ChangePoster method
    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }

    //ChangeYear method
    onChangeYear(e){
        this.setState({
        Year: e.target.value
        });
    }




    //render method
    render() {
        return (
            
            //form
            <div className='App'>
                <h1>Add more shoes to the list<br></br><br></br></h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <h4>Add Shoe Brand: </h4>
                        <input type='text'  className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="from-group">
                        <h4>Add Shoe Model: </h4>
                        <input type ='text'
                        className = 'form-control'
                        value = {this.state.Year}
                        onChange = {this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <h4>Shoe Photo: </h4>
                        <textarea type ='text'
                        className = 'form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className="from-group">
                        <input type='submit'
                            value='add shoe'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}



