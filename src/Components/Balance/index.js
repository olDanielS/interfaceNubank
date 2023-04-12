import React from 'react';
import { Container, Content, BalanceTitle, CurrentSymble, CurrentValue } from './styles';
import { View } from 'react-native';

export default function Balance() {
  return (
    <Container>
      <Content>
        <BalanceTitle>Saldo</BalanceTitle>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CurrentSymble>R$</CurrentSymble>
          <CurrentValue type={'entry'}>13.000.00</CurrentValue>
        </View>
      </Content>
      <Content>
        <BalanceTitle>Gastos</BalanceTitle>
        <View style={{ flexDirection: 'row',alignItems: 'center'}}>
          <CurrentSymble>R$</CurrentSymble>
          <CurrentValue type={'output'}>-500.00</CurrentValue>
        </View>
      </Content>
    </Container>
  );
}