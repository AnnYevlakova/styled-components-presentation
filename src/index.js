import styled from 'styled-components';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Button = styled.button`
    width: 150px;
    height: 50px;
    margin-right: 20px;
    border: ${props => props.primary ? '1px solid #a70054' : '1px solid #000000'};
    background-color: ${props => props.primary ? '#f5b1d4' : '#ffffff'};
    color: ${props => props.primary ? '#74003a' : '#000000'};
    outline: none;
    box-shadow: -4px 6px 12px 0px #cecece;
    &:focus {
        box-shadow: none;
        font-size: 18px;
    }
`;

class App extends Component {
    render() {
        return (
            <div>
                <Button>ordinary</Button>
                <Button primary>primary</Button>
            </div>
        )
    }
}









ReactDOM.render(
<App />,
    document.getElementById('app'),
);
