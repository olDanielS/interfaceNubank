import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from './styles';

import Header from '../../Components/Header';
import Balance from '../../Components/Balance';
import Actions from '../../Components/Actions';

export default function Home() {

    const heigthStatusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 24 : 64 

    return (
        <Container>
            <Header data={heigthStatusBar}/>
            <Balance/>
            <Actions/>
        </Container>

    );
}