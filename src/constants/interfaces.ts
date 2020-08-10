import { ChangeEvent } from 'react';

export interface Styles {
  looks?: string;
  customStyles?: object;
  customClasses?: string;
}

export interface InputField {
  autoFocus: boolean;
  checked: boolean | undefined;
  disabled: boolean;
  id: string;
  label: string
  name: string
  onBlur: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  placeholder: string;
  type: string;
  value: string;
}
