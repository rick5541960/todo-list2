import React, { Component } from 'react'

export class AddTodo extends Component {

    constructor(props){
        super(props);

        this.state = {
            switch: false,
            title:'',
            date:'',

        }

        this.buttonHandler = this.buttonHandler.bind(this);
    }

    

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addd(this.state.title,this.state.date)
        this.setState({title: '',
                        date:'',
                        switch: !this.state.switch
                    })
    }
    onChnge = (e) => this.setState({[e.target.name]: e.target.value})


    buttonHandler = () =>{
        this.setState({switch: !this.state.switch});
        console.log(this.state.switch);

    }

    
    render() {
        return (
            <React.Fragment>
    <button id="myBtn" onClick = {this.buttonHandler}>{!this.state.switch? 'Add Todo':'Cancel'}</button>
               
                <div ref="myModal"  style = {{display: this.state.switch? 'block': 'none'}}>

                    <div>
                       
                        
                        <form onSubmit={this.onSubmit} style={{display:'flex'}}>
                            <input type='text' name='title' placeholder='Add Todo' style={{flex:'10'}} value={this.state.title} onChange={this.onChnge} required/>
                            <input type='date' name='date' placeholder='Date: DD-MM-YYYY' style={{flex:'10'}} value={this.state.date} onChange={this.onChnge} required/>
                            <input type='submit' value='submit' className='btn' style={{flex:'1'}}/>
                        </form>
                    </div>

                </div>
            </React.Fragment>
            
        )
    }
}

export default AddTodo
