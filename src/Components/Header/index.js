import React from 'react';
import { Container, UserName, BtnUserIcon } from './styles';
import { StyleSheet } from 'react-native';
import { MotiView, MotiText } from 'moti';

import Feather from '@expo/vector-icons/Feather'


export default function Header({ data }) {
  return (
    <Container heigth={data}>
      <MotiView
        from={{
          translateY: -150,
          opacity: 0
        }}
        animate={{
          translateY: 0,
          opacity: 1
        }}
        transition={{
          type: 'timing',
          duration: 800,
          delay: 400
        }}

        style={styles.header}
      >

          <MotiText
          from={{
            translateX: -300,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1
          }}
          transition={{
            type: 'timing',
            duration: 800,
            delay: 800
          }}
          >
            <UserName>
          Daniel Santos
        </UserName>
          </MotiText>
        
        <BtnUserIcon>
          <Feather name='user' size={32} color='#FFF' />
        </BtnUserIcon>
      </MotiView>

    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
  alignItems:'center',
  justifyContent: 'space-between',
  flexDirection: 'row'
}
})