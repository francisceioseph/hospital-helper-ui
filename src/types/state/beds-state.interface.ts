import { IBed } from "../models/bed.interface";

export interface IBedState {
  beds: IBed[];
  loading: boolean;
  reload: boolean;
  error?: any;
}
