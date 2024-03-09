import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

import { IoIosAddCircle } from "react-icons/io";
import Header from './Header';
import NewCard from './NewCard';
import Tasks from './Tasks';
function Section({ section, onAddNewCard }) {
    const [tasks, setTasks] = useState([]);
    const handleAddNewCard = (newCard) => {
        setTasks((prevTasks) => [...prevTasks, newCard]);
        onAddNewCard(newCard);
    };
    return (
        <Container>
            <Header props={section} />
            {section.tasks.map((task, index) => (
                <Tasks key={index} props={task} />
            ))}
            <NewCard onAddNewCard={handleAddNewCard} />
        </Container>
    )
}

export default Section

const Container = styled.div`
    display: flex;
    flex-direction: column; /* Added */
    align-items: center;
    height: 60vh;
    
    width: 30vw;
    box-sizing: border-box;
    margin: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`;

