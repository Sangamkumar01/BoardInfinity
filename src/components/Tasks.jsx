import React from 'react'
import styled from 'styled-components';
function Tasks({ props }) {
    return (
        <Container>
            <Title>
                {props}
            </Title>
        </Container>
    )
}

export default Tasks

const Container = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    height : 50px;
    width : 95%;
    background-color : #fff;
    border-radius : 5px 5px 0 0;
    box-shadow : 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding : 0 10px;
    margin :5px;
`;
const Title = styled.h3`
    font-size : 1.2em;
    font-weight : 500;
    color : #000;
    margin : 0;
`;