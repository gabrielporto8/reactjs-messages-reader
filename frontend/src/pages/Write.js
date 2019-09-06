import React, { useState } from 'react';
import './Write.css';

import api from '../services/api';

export default function Write() {
    const [ message, setMessage ] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        await api.post('/home', {
            message
        });
    }

    function clearInput() {
        document.getElementById("input-message").value="";
    }

    return (
        <div className="writer-container">
            <form onSubmit={handleSubmit}>
                <input id="input-message" 
                    placeholder="Insira aqui a mensagem." 
                    value={message}
                    onChange={e => setMessage(e.target.value)} 
                />
                <button type="submit" onClick={clearInput}>Enviar!</button>
            </form>
        </div>
    );
}