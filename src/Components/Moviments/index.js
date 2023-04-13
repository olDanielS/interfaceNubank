import React, {useState} from 'react';
import { Container,LabelDate,LabelDescription,LabelValue,Content,Skeleton } from './styles';

export default function Moviments({data}) {

    const [showValue, setShowValue] = useState(false);
 return (
   <Container onPress={() => setShowValue(!showValue)}>
        <LabelDate>{data.date}</LabelDate>
        <Content>
            <LabelDescription>{data.label}</LabelDescription>
            {
                showValue ? (
                    <LabelValue bg={data.type}>{data.value}</LabelValue>
                ) : (
                    <Skeleton/>
                )
            }
            
        </Content>
   </Container>
  );
}