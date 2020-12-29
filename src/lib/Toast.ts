import { toast } from 'react-toastify';

export const successToast = (message: string): void => {
  toast.success(message);
}

export const errorToast = (message: string): void => {
  toast.error(message);
}

export const warningToast = (message: string): void => {
  toast.warn(message);
}

export const infoToast = (message: string): void => {
  toast.info(message);
}