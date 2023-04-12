import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #FFF;
    padding: 15px;
    justify-content: space-between;
    flex-direction: row;
    margin-top: -30px;
    margin-left: 15px;
    margin-right: 15px;
    align-items: center;
    border-radius: 5px;
    z-index: 99;

`
export const Content = styled.View`
   
  
`
export const BalanceTitle = styled.Text`
    color: rgba(0,0,0,0.2);
    font-size: 20px;
`
export const CurrentSymble = styled.Text`
    color: rgba(0,0,0,0.2);
    font-size: 14px;
    padding-right: 5px;
`
export const CurrentValue = styled.Text`
    font-size: 22px;
    color: ${props => props.type == "entry" ? "#2ecc71" : "#e74c3c"}; 
    font-weight: 400;
`