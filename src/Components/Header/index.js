import React from 'react';
import { Container, UserName, BtnUserIcon } from './styles';
import Feather from '@expo/vector-icons/Feather'


export default function Header({ data }) {
  return (
    <Container heigth={data}>
      <UserName>Daniel Santos</UserName>
      <BtnUserIcon>
        <Feather name='user' size={32} color='#FFF' />
      </BtnUserIcon>
    </Container>
  );
}