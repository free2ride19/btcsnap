import React from 'react';
import { observer } from "mobx-react-lite";
import { Loader, Modal } from 'semantic-ui-react';
import Main from "./Main";
import Aside from "./Aside";
import { useBalance } from "../../hook/useBalance";
import {useKeystoneStore} from "../../mobx";
import { AccountBackground, AccountContainer, AccountLabel } from "./styles"

const Account = observer(() => {
  const { runtime: {isLoading} } = useKeystoneStore();
  const { balance, rate, refresh } = useBalance();

  return (
    <>
      <Modal open={isLoading}>
        <Loader inverted />
      </Modal>
      <AccountBackground>
        <AccountContainer>
          <Main balance={balance} rate={rate} />
          <Aside refreshBalance={refresh}/>
        </AccountContainer>
        <AccountLabel>Powered by MetaMask Snaps</AccountLabel>
      </AccountBackground>
    </>
  );
});

export default Account;
