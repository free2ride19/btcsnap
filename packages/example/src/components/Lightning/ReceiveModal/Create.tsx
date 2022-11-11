import React, { useState } from 'react';
import { Container, Modal, TransitionablePortal } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { useReceiveAddress } from '../../../hook/useReceiveAddress';
import { useAppStore } from '../../../mobx';
import { copyToClipboard } from '../../../utils/clipboard';
import ModalHeader from '../../../kits/ModalHeader';
import ReceiveIcon from '../../Icons/ReceiveIcon';
import ModalBackground from '../../../kits/ModalBackground';
import { H3, H4 } from '../../Layout/Text/Title';
import AmountInput from './AmountInput';
import ReceiveViewModel from './model';

type LightningReceiveCreateModalProps = {
  close: () => void;
  model: ReceiveViewModel;
};

const LightningReceiveCreateModal = observer(
  ({ model, close }: LightningReceiveCreateModalProps) => {
    const {
      settings: { dynamicAddress },
    } = useAppStore();

    return (
      <TransitionablePortal
        open
        onClose={close}
        transition={{ animation: 'fade up', duration: '300' }}>
        <Modal
          style={{
            width: 440,
            height: 640,
            borderRadius: '20px',
            position: 'relative',
          }}
          open={true}>
          <ModalBackground>
            <ModalHeader
              left={
                <>
                  <ReceiveIcon size={36} />
                  <H3 style={{ marginLeft: 4 }}>RECEIVE</H3>
                </>
              }
              onClose={() => close()}
            />
            <Container style={{ padding: 32 }}>
              <H4 style={{ color: 'var(--c-n50)' }}>Amount</H4>
              <AmountInput model={model} />
            </Container>
          </ModalBackground>
        </Modal>
      </TransitionablePortal>
    );
  },
);

export default LightningReceiveCreateModal;
