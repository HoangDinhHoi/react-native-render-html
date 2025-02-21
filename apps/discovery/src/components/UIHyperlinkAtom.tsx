import React from 'react';
import { useColorRoles } from '../theme/colorSystem';
import { TextRoleNucleonProps } from './nucleons/TextRoleNucleon';
import useTextRoleNucleon from './nucleons/useTextRoleNucleon';
import { Text } from 'react-native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

export default function UIHyperlinkAtom({
  children,
  role = 'bodyInlineCode',
  color,
  ...props
}: Partial<TextRoleNucleonProps>) {
  const { hyperlinkColor } = useColorRoles();
  const textStyle = useTextRoleNucleon({
    color: color || hyperlinkColor,
    role
  });
  return (
    <NativeViewGestureHandler>
      <Text {...props} style={[props.style, textStyle]} children={children} allowFontScaling={false}/>
    </NativeViewGestureHandler>
  );
}
