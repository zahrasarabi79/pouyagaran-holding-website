'use client';
import React, { FC } from 'react';
import { Box } from '@mui/material';

export interface IconComponentProps {
  pathName: string;
  color?: string;
  size?: string;
  focused?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const Icon: FC<IconComponentProps> = ({
  className = 'icon',
  pathName,
  color = 'white',
  size = '24px',
  focused,
  style,
}) => {
  return (
    <>
      <Box
        data-testid="landing-icon"
        className={className}
        component="div"
        sx={{
          maskImage: `url(/icon/${pathName})`,
          WebkitMaskImage: `url(/icon/${pathName})`,
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: size,
          backgroundColor: focused ? 'primary' : color,
          width: size,
          height: size,
          fontWeight: '100',
          ...style,
        }}
      />
    </>
  );
};

export default Icon;
