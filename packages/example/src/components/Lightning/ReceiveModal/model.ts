import { makeAutoObservable } from 'mobx';
import { LightningUnit } from '../../../interface';

class ReceiveViewModel {
  amount = 0;
  mainUnit: LightningUnit = LightningUnit.Sats;

  constructor(amount: number, unit?: LightningUnit) {
    makeAutoObservable(this);
    if (unit) {
      this.mainUnit = unit;
    }
  }
}

export default ReceiveViewModel;
