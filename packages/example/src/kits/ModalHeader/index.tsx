import { ReactNode } from 'react';
import CloseIcon from '../../components/Icons/CloseIcon';
import { Container, Content, Left } from './styles';

interface Props {
  left?: ReactNode;
  children?: ReactNode;
  onClose?: () => void;
}

const ModalHeader = ({ left, children, onClose }: Props) => {
  return (
    <Container>
      <Left>{left}</Left>
      <Content>{children}</Content>
      {onClose && <CloseIcon onClick={onClose} />}
    </Container>
  );
};

export default ModalHeader;
