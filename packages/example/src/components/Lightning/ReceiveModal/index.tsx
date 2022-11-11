import { observer } from 'mobx-react-lite';
import { useMemo, useState } from 'react';
import LightningReceiveCreateModal from './Create';
import ReceiveViewModel from './model';

interface ContainerProps {
  close: () => void;
}

const ReceiveContainer = ({ close }: ContainerProps) => {
  const [amount, setAmount] = useState(0);

  const model = useMemo(() => {
    return new ReceiveViewModel(amount);
  }, []);

  return <LightningReceiveModal model={model} close={close} />;
};

interface LightningReceiveModalProps {
  model: ReceiveViewModel;
  close: () => void;
}

const LightningReceiveModal = observer((props: LightningReceiveModalProps) => {
  return <>{<LightningReceiveCreateModal {...props} />}</>;
});

export default ReceiveContainer;
