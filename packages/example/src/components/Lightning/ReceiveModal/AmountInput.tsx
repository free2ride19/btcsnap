import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import { Large } from '../../Layout/Text/Body';
import SwitchIcon from '../../Icons/SwitchIcon';
import { H3 } from '../../Layout/Text/Title';
import ReceiveViewModel from './model';

type AmountInputProps = {
  model: ReceiveViewModel;
};

const LargeInput = styled(Large).attrs({ as: 'input', size: '1' })`
  color: var(--c-n80);
  :placeholder {
    color: var(--c-ntd20);
  }
  border: 0;
  max-width: 280px;
  background: transparent;
`;

const AmountInput = ({ model }: AmountInputProps) => {
  return (
    <Container>
      <LargeInput placeholder="0" />
      <H3>{model.mainUnit}</H3>
      <SwitchIcon />
    </Container>
  );
};

export default AmountInput;
