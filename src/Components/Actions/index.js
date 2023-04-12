import React from 'react';
import { Container, Content,AreaBtn,IconView,TitleActions} from './styles';
import AntDesign from '@expo/vector-icons/AntDesign'
import { Text } from 'react-native';


export default function Actions() {
  return (
    <Container>
        <Content horizontal showsHorizontalScrollIndicator={false}>
            <AreaBtn>
              <IconView>
                <AntDesign name='addfolder' size={26} color='#000'/>
              </IconView>
              <TitleActions>Entradas</TitleActions>
            </AreaBtn>
            <AreaBtn>
              <IconView>
                <AntDesign name='tagso' size={26} color='#000'/>
              </IconView>
              <TitleActions>Compras</TitleActions>
            </AreaBtn>
            <AreaBtn>
              <IconView>
                <AntDesign name='creditcard' size={26} color='#000'/>
              </IconView>
              <TitleActions>Carteira</TitleActions>
            </AreaBtn>
            <AreaBtn>
              <IconView>
                <AntDesign name='barcode' size={26} color='#000'/>
              </IconView>
              <TitleActions>Boletos</TitleActions>
            </AreaBtn>
            
            <AreaBtn>
              <IconView>
                <AntDesign name='setting' size={26} color='#000'/>
              </IconView>
              <TitleActions>Conta</TitleActions>
            </AreaBtn>
            
        </Content>
    </Container>
  );
}