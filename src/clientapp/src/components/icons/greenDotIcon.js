import React from 'react';
import { VscCircleFilled } from 'react-icons/vsc';
import { IconContext } from 'react-icons';

export function GreenDotIcon ({ className }) {
  return (
    <IconContext.Provider value={{ color: '#008800', className }}>
      <VscCircleFilled />
    </IconContext.Provider>
  );
};
