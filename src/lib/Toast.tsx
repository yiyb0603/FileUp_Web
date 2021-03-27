import React, { CSSProperties } from 'react';
import { Toaster, ToastProps } from '@class101/ui';
import { BiErrorAlt } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { Palette as palette } from 'styles/Palette/Palette';

let AppToaster: Toaster | null = null;
const iconStyle: CSSProperties = {
  color: palette.white,
}

export const showToast = async (props: ToastProps): Promise<void> => {
  if (!AppToaster) {
    AppToaster = await Toaster.create();
  }

  AppToaster.show(props);
}

export const successToast = (message: string): void => {
  showToast({
    backgroundColor: palette.green,
    message,
    button: <MdClose style={iconStyle} />,
    icon: <BsCheckCircle style={iconStyle} />,
  });
}

export const errorToast = (message: string): void => {
  showToast({
    backgroundColor: palette.red,
    message,
    button: <MdClose style={iconStyle} />,
    icon: <BiErrorAlt style={iconStyle} />,
  });
}