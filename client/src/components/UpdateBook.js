
import React, { Component } from 'react';
import axios from 'axios';


class UpdateBook extends Component {
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
    componentDidMount (){
        const id = this.props.match.params.id;
       
    axios.get(`/api/books/`+id).then(
        resp => this.setState({ name : resp.data.name, desc : resp.data.desc})
    )

    }
        AddNewBook = (e) => {
        
        e.preventDefault();
        // alert(this.BookName.value);
        const frm =this.frm.reset();
            const { name ,desc} = this.state;
            const id = this.props.match.params.id;
        axios.put('/api/books/updateBook',{name , desc ,id})
        .then(
            res => {
                if(res){  
                    this.props.history.push("/");
                    
                }
               
            } )
       
    }
    check = () => {
        const id = this.props.match.params.id;
        alert(id);
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
export default UpdateBook;