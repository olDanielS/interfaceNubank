import styled from "styled-components/native";
import { MotiView, MotiText } from 'moti';

export const Container = styled.View`
    background-color: #8000ff;
    padding-top: ${props => props.heigth}px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 44px;
    
`
export const UserName = styled.Text`
    font-size: 22px;
    color: #FFF;
    font-weight: bold;
`
export const BtnUserIcon = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    background-color: rgba(255,255,255,0.4);
    align-items: center;
    justify-content: center;
    border-radius: 22px;

`