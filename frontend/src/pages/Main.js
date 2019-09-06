import React, { useState, useEffect } from 'react';
import './Main.css';

import api from '../services/api';

export default function Main() {
    const [ scrap, setScrap ] = useState([]);
    const [ allScraps, setAllScraps ] = useState([]);
    const [scrapLength, setScrapLength] = useState([]);

    useEffect(() => {
        async function getAllUsers() {
        const response = await api.get('/all');

        setScrapLength(response.data.length);
        setAllScraps(response.data);
        setScrap(response.data[0])
        }
        getAllUsers()
    }, []);

    function getRandom(max) {
        return Math.floor(Math.random() * max + 1)
    }

    async function handleScrap(event, id) {
        event.preventDefault()
        const response = allScraps.filter(scrap => scrap._id === id)
        setScrap(response[0])
    }

    return (
        <div className="main-container">
            <form>
                { scrap ? (
                <>
                <span>{scrap.message} {scrap._id}</span>
                <button type="submit" onClick={(event) => handleScrap(event, scrap._id - 1)}>Anterior!</button>
                <button type="submit" onClick={(event) => handleScrap(event, scrap._id + 1)}>Próximo!</button>
                </>
                ) : (
                    <>
                    <span>Acabou :(</span>
                    <button type="submit" onClick={(event) => handleScrap(event, 0)}>Reiniciar!</button>
                    </>
                )}
            </form>
        </div>
    );
}