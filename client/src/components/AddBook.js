import React, { Component } from 'react';
import axios from 'axios';


class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            desc: ''
        }
    }
    _changeHandler = (e) => {
            const state = this.state;
            state[e.target.name] = e.target.value;
            this.setState({
               state
            })


    }
    AddNewBook = (e) => {
        
        e.preventDefault();
        // alert(this.BookName.value);
        const frm =this.frm.reset();
            const { name ,desc} = this.state;
            
        axios.post('/api/books/add',{name , desc})
        .then(
            res => {
                if(res){  
                    alert('data has been update successfully'); 
                    this.props.history.push("/");
                }
               
            } )
       
    }
    render() {
        const {name , desc} = this.state
        return (
            <div className="container jumbotron">
                <div className="col-md-6 col-md-offset-3">
                    <form method="post" onSubmit={this.AddNewBook}
                    ref = {(el) => this.frm = el }
                    >
                        <h1 style={{ textAlign: 'center' }}>Add New Book</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"
                             name = 'name'   className="form-control"
                             value={name} onChange={this._changeHandler}
                                required />
                        </div>
                        <div className="form-group">
                            <label>desc</label>
                            <input type="text" name='desc'
                                className="form-control" value={desc}
                                onChange={this._changeHandler}
                                required />
                        </div>
                        <button type="submit" className="btn btn-primary form-control">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddBook;