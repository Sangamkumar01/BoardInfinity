import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { IoIosAddCircle } from "react-icons/io";
import styled from 'styled-components';
function Header({ props }) {
    return (
        <Container>


            <Title style={{ backgroundColor: props.color }}>{props.title}</Title>
            {props.tasks.length}

            <Icons>

                <BsThreeDots />
                <IoIosAddCircle />
            </Icons>
        </Container>
    )
}

export default Header

const Container = styled.div`   
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 95%;
    background-color: #fff;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
    padding: 0 10px;
`;
const Title = styled.h3`
    font-size: 1.2em;
    font-weight: 500;
    color: #000;
    margin : 0;
`;
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50px;
    font-size: 1.5em;
    color: #000;
`;