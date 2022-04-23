import React from 'react';
import { VscCircleFilled } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

const RedDotIcon = ({ className }) => {
  return (
    <IconContext.Provider value={{ color: '#8B0000', className }}>
      <VscCircleFilled />
    </IconContext.Provider>
  );
};

export default RedDotIcon;