"use strict"

import React from "react"

//Children é uma propriedade do React que diz que tudo 
//que vai dentro do componente que tem children, são "filhos"
//desse componente, ou seja, podemos rederizar tudo aquilo que estiver
//dentro do componente.

//Posso criar outros componentes button vindo a partir desse, que seria o componente 
//mãe dos outros.

// const LikeButton = () => (
//     <Button>Texto do botão</Button>
// )

// export default LikeButton

const Button = ({children, handleClick}) => (
    <button onClick={handleClick}>
    {children}
    </button>
)

export default Button
