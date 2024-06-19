import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTN1NzczZDIwY2M2Y2NhNWQ4YWVjMjQzNTd1NDc1ZCIsInN1YiI6IjY2MjIyMDFhYWUzODQzMDE4NzJhNTJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vPDW2QwNr9hIRdOvJx_x8hbHnDYZGHMtnZwfkqb3J8U'
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    setApiData(data.results[0]);
                }
            })
            .catch(err => console.error(err));
    }, [id]);

    // Function to handle back button click (navigate to homepage)
    const handleBackToHome = () => {
        navigate('/'); // Navigate to the homepage
    };

    return (
        <div className='player'>
            <img src={back_arrow_icon} alt="Back" onClick={handleBackToHome} />
            <iframe
                src={apiData.key ? `https://www.youtube.com/embed/${apiData.key}` : ''}
                width='90%'
                height='90%'
                title='trailer'
                frameBorder='0'
                allowFullScreen
            ></iframe>
            <div className="bottom-info">
                <div className="info-column">
                    <p>Published Date:</p>
                    <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : ''}</p>
                </div>
                <div className="info-column">
                    <p>Name:</p>
                    <p>{apiData.name}</p>
                </div>
                <div className="info-column">
                    <p>Type:</p>
                    <p>{apiData.type}</p>
                </div>
            </div>
        </div>
    );
}

export default Player;
