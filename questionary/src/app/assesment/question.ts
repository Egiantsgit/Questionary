import {IOptionList} from './option-list';

export interface IQuestion {
  id: number;
  questions: string;
  options: IOptionList;
}
