import React, {Component} from "react";
import {Fab, TextField} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

class NewDish extends Component{
/*     constructor(){
        super();
        this.assDish = this.assDish.bind(this);
    } */

    newDish = React.createRef();
    assDish = event =>{
        console.log("Agregar platillo");
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        console.log(this.newDish.value);
        this.props.onAddDish(this.newDish.value);
        this.newDish.value = "";
    }
    render(){
        return(
            <form autoComplete="off" onSubmit={this.assDish}>
                {/* <input ref={this.newDish}/> */}
                <TextField
                    label="Platillo..."
                    type="text"
                    margin="normal"
                    variant="outlined"
                    inputRef={e => (this.newDish = e)}
                />
                <Fab 
                color="primary" 
                aria-label="add" 
                size="medium"
                className="dish-form-icon" 
                onClick={this.assDish}>
                    <AddIcon />
                </Fab>
            </form>
        )
    }
}

export default NewDish;