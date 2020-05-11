import { IBed } from "../models/bed.interface";

export interface IBedState {
  beds: IBed[];
  bed?: IBed;
  loading: boolean;
  reload: boolean;
  error?: any;
}
