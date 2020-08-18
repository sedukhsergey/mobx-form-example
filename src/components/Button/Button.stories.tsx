import React from 'react';
import { ReactNode } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Styles } from 'constants/index';
import Button from './Button';

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

const Template: Story<Props> = args => <Button {...args}>Click</Button>;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  onClick: () => console.log('click'),
  looks: 'default',
  customStyles: { 'max-width': '120px' },
};

export const ButtonBlue = Template.bind({});
ButtonBlue.args = {
  onClick: () => console.log('click'),
  looks: 'primary',
  customStyles: { 'max-width': '120px' },
};

export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  onClick: () => console.log('click'),
  looks: 'secondary',
  customStyles: { 'max-width': '120px' },
};

export const ButtonLoadingDisabled = Template.bind({});
ButtonLoadingDisabled.args = {
  onClick: () => console.log('click'),
  looks: 'default loading',
  disabled: true,
  customStyles: { 'max-width': '120px' },
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  onClick: () => console.log('click'),
  looks: 'default',
  disabled: true,
  customStyles: { 'max-width': '120px' },
};
