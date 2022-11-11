import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  children?: ReactNode;
}

const ModalBackground = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ModalBackground;
