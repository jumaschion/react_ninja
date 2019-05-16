"use stric"

//Style fica como um objeto passando as propriedades de estilo.

import React from "react"

const Square = ({ color }) => (
    <div style={{
        backgroundColor: color,
        height: "100px",
        width: "100px"
    }} />
)

//propriedade estática que podemos passar valor como padrão se não passarmos nenhum valor

Square.defaultProps = { 
    color: "red"
}

export default Square