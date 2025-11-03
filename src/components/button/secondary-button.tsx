import React from 'react';
import { Button } from './default-button';
import { Location05Icon } from '@/assets/icons';

export const SecondaryButton = () => {
  return (
    < Button
      size="md"
      bg=""
      textColor="text-purple-600"
      text="مکان من"
      borderColor="border border-purple-600"
      leftIcon={<Location05Icon />}
      rightIcon={<Location05Icon />}
    />
  );
};