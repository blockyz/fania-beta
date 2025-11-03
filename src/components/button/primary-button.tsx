import React from 'react';
import { Button } from './default-button';
import { Location05Icon } from '@/assets/icons';

export const PrimaryButton = () => {
  return (
    <Button
      size="md"
      bg="bg-purple-600"
      textColor="text-white"
      text="مکان من"
      leftIcon={<Location05Icon />}
      rightIcon={<Location05Icon />}
    />
  );
};