import React, { useState} from 'react';

function Api() {

    const [variable, setVariable] = useState("Antes de chamar a API");

    const getApiLocal = async () => {
        await fetch("http://127.0.0.1:5000/v1/aula/consultar", { // Habilitei o CORS no backend e funcionou!
            method: 'GET',
        })
            .then((res) => {
                res.json().then((data) => {
                    setVariable(data.mensagem)
                })
            }).catch((error) => console.log(error));

    };
    
    return (
        <div className="display-board">
            <div className="btn">
            <button type="button" onClick={(e) => getApiLocal()} className="btn btn-warning">Chamada da API</button>
            <p>{variable}</p>
            </div>
        </div>
    );
}

export default Api;