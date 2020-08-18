// YourComponent.stories.ts
import Button from './Button';
import {Styles} from "constants/index";
import {ReactNode} from "react";

export default {
  title: 'Button',
  component: Button,
};

enum ButtonTypes {
  'button',
  'submit',
  'reset',
  undefined
}

interface Props extends Styles {
  children: ReactNode,
  onClick: () => void,
  disabled?: boolean,
  type?: ButtonTypes | any,
}

const Template = ({
  children,

                  }: Props) => ({
  component: Button,
  props: args,
});

export const ButtonComp: any = Template.bind({});
ButtonComp.args = {
  children: 'Some Button text',
  onClick: () => console.log('click'),
  /* the args you need here will depend on your component */
};
