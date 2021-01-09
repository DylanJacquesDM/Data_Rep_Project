import React from 'react';
import axios from 'axios';

//Exportable 'Create' class
export class Edit extends React.Component {


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
        poster: this.state.Poster,
        _id: this.state._id
    }

    axios.put('http://localhost:4000/api/shoes/' +this.state._id, newShoe)
        .then(res =>{
            console.log(res.data)
        })
        .catch()



    
    // //axios post
    // axios.post('http://localhost:4000/api/shoes', newShoe)

    // //reports
    // .then((res)=>{
    //     console.log(res);
    // })  
    // .catch((err)=>{
    //     console.log(err);
    // });
}


    //fired when component is active
    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/shoes/' + this.props.match.params.id)
        .then(response =>{
            this.setState({
            _id:response.data._id,
            Title:response.data.title,
            Year:response.data.year,
            Poster:response.data.poster
            })
        })
        .catch((error)=>{
            console.log(error)
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
                <h1>Edit shoes from the list<br></br><br></br></h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Shoe Brand: </label>
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="from-group">
                        <label>Add Shoe Model: </label>
                        <input type ='text'
                        className = 'form-control'
                        value = {this.state.Year}
                        onChange = {this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Shoe Photo: </label>
                        <textarea type ='text'
                        className = 'form-control'
                        value={this.state.Poster}
                        onChange={this.onChangePoster}>
                        </textarea>
                    </div>
                    <div className="from-group">
                        <input type='submit'
                            value='Edit shoe'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}



