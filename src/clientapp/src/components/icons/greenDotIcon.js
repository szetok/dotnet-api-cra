import React from 'react';
import { VscCircleFilled } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

const GreenDotIcon = ({ className }) => {
  return (
    <IconContext.Provider value={{ color: '#008800', className }}>
      <VscCircleFilled />
    </IconContext.Provider>
  );
};

export default GreenDotIcon;