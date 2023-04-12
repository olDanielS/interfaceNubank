import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #9400D3;
    padding-top: ${props => props.heigth}px;
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 44px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
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