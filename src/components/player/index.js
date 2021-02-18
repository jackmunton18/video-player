import React from 'react';
import { Container } from './styles/player';


export default function Player({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
}
