import { mergeProps } from 'solid-js';
import { SvgIconProps } from './svg-icon.d';

const defaultProps: SvgIconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  version: '1.1',
  x: '0px',
  y: '0px',
  viewBox: '0 0 30 30',
  height: '2.14rem',
  width: '2.14rem',
};

// font awesome
export const SvgIcon = (componentProps: SvgIconProps) => {
  const props = mergeProps(defaultProps, componentProps);

  return <svg {...props}>{componentProps.children}</svg>;
};
