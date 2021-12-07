import { colors } from '@util';
import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';

type iconProps = {
  width?: number;
  height?: number;
  iconFillColor?: string;
  style?: any;
  isActive?: boolean;
  strokeWidth?: number;
};

export const EyeIconOpen = () => (
  <Svg width={24} height={16} viewBox="0 0 24 16" fill="none">
    <Path
      d="M12 1.25C4.5 1.25 1.5 8 1.5 8s3 6.75 10.5 6.75S22.5 8 22.5 8s-3-6.75-10.5-6.75z"
      stroke={colors.primary}
      strokeOpacity={0.8}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 11a3 3 0 100-6 3 3 0 000 6z"
      stroke={colors.primary}
      strokeOpacity={0.8}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EyeIconClose = (props: iconProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.494 18.494 0 0 1-2.16 3.19m-6.72-1.07a2.998 2.998 0 0 1-5.194-2.098A3 3 0 0 1 9.88 9.88m8.06 8.06A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94l11.88 11.88ZM1 1l22 22"
      stroke="#57526A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconCheck = (props: iconProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      d="M20 6 9 17l-5-5"
      stroke="#57526A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);





