import styled from "styled-components/native";

import { Platform } from "react-native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`
export const Content = styled.View`
    //background-color: rgba(255,255,255,0.9);
    background-color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: ${Platform.OS === 'ios' ? 38 : 24}px;
    position: absolute;
    border-radius: 25px;
    bottom: 0px;
    gap: 15px;
    elevation: 1;

`