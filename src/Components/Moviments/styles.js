import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
   padding-bottom: 15px;

`
export const LabelDate = styled.Text`
    color: rgba(0,0,0,0.4);
`
export const LabelDescription = styled.Text`
    font-size: 18px;
    font-weight: 500;

`
export const LabelValue = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.bg == 1 ? '#2ecc71' : '#e74c3c'};

`
export const Content = styled.View`
   justify-content: space-between;
    flex-direction: row;
`
export const Skeleton = styled.View`
   background-color: rgba(0,0,0,0.2);
   height: 15px ;
   width: 100px;
   border-radius: 10px;
`