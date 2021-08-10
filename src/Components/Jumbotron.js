import background from '../assests/background.jpg'
import React from 'react';
import { Jumbotron as Jumbo} from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
.jumbotron{
    background: url(${background}) no-repeat;
    background-size: cover;
    color: white;
    height: 200px;
    position: relative;
    z-index: -2;
}

.overlay{
    background-color: black;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;
export const Jumbotron = () => (
<Styles>
    <Jumbo fluid className="jumbotron">
        <div className="overlay"></div>
        <h2>Transactions</h2>
    </Jumbo>
</Styles>
);