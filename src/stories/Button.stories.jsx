import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Default",
  type: "button",
  onClick: () => {}, 
  buttonStyle: "button--default--solid",
  buttonSize: "button--small",
};
