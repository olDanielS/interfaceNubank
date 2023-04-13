import React, {useState} from 'react';
import { StatusBar } from 'react-native';

import { Container, TitleMoviments,ContentMoviments,FlatMoviments } from './styles';

import Header from '../../Components/Header';
import Balance from '../../Components/Balance';
import Actions from '../../Components/Actions';
import Moviments from '../../Components/Moviments';


export default function Home() {

    const data = [
        {
            id: 1,
            label: 'Boleto conta luz',
            value: '300,90',
            date: '17/09/2022',
            type: 0 // despesas
          },
          {
            id: 2,
            label: 'Pix Cliente X',
            value: '2.500,00',
            date: '20/09/2022',
            type: 1 // receita / entradas
          },
          {
            id: 3,
            label: 'Salário',
            value: '7.200,00',
            date: '22/09/2022',
            type: 1 // receita / entradas
          },
          {
            id: 4,
            label: 'Salário',
            value: '12.200,00',
            date: '22/09/2023',
            type: 1 
          },
          {
            id: 5,
            label: 'Boleto',
            value: '100,00',
            date: '22/09/2023',
            type: 0 
          },
          {
            id: 6,
            label: 'Boleto',
            value: '800,00',
            date: '22/05/2023',
            type: 0 
          },
          {
            id: 7,
            label: 'Boleto',
            value: '800,00',
            date: '22/05/2023',
            type: 0 
          },
          {
            id: 8,
            label: 'Boleto',
            value: '800,00',
            date: '22/05/2023',
            type: 0 
          },
          {
            id: 9,
            label: 'Boleto',
            value: '800,00',
            date: '22/05/2023',
            type: 0 
          },
          {
            id: 10,
            label: 'Boleto',
            value: '800,00',
            date: '22/05/2023',
            type: 0 
          }
    ];


    const heigthStatusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 24 : 64

    return (
        <Container>
            <Header data={heigthStatusBar} />
            <Balance />
            <Actions />
            <ContentMoviments>
                <TitleMoviments>Últimas movimentações</TitleMoviments>
            </ContentMoviments>
                <FlatMoviments
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Moviments data={item}/>}
                    showsVerticalScrollIndicator={false}
                />
        </Container>

    );
}