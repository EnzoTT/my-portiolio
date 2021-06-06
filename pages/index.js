import { useState } from 'react'
function Home() {
    return(
         <div>
        <h1>Home</h1>
        <Contador/>
    </div>)
}

function Contador() {
    const [contador, setContador] = useState(1);

    function cont() {
        setContador(contador + 1)
    }
    return (
        <div>
            <h2>{contador}</h2>
            <button onClick={cont}>Adicionar</button>
        </div>

    )

}

export default Home