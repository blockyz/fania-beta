import React from 'react';
import { Button } from './default-button';
import { Location05Icon } from '@/assets/icons';

export const PurpleOutlineButton = () => {
  return (
    <Button
      size="md"
      bg=""
      textColor="text-purple-600"
      text="وارد"
      borderColor=""
      leftIcon={<Location05Icon />}
      rightIcon={<Location05Icon />}
    />
  );
};