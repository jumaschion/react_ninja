"use strict"

import React, { Component } from "react"

import Button from "./button"
import Square from "./square"

// import Title from "./title"

//Eventos são passados inline com arrow functions como no caso do onClick.

/*
 <div className="cointainer" onClick={(e) => {
                alert("clicou")
            }}>
                <Square/>
                <Button>Texto</Button>
            </div>
*/

class App extends Component{
    constructor() {
        super()
        this.state = {
            color: "black"
        }
    }
    
    render () {
        return(
            <div>
        
                <Square color={this.state.color}/>
                {['purple', 'green', 'blue'].map((color) => (
                <Button 
                key={color} 
                handleClick={() => this.setState({color})}>{color}
                </Button>
            ))
        }
            </div>
            
        )
    }
}

export default App 