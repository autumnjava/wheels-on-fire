import { mergeProps } from 'solid-js';
import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';

const defaultProps: SvgIconProps = {
  height: '19px',
  width: '24px',
  viewBox: '0 0 320 512',
  fill: 'white',
};

export const ChevronLeftIcon = (componentProps: SvgIconProps) => {
  const props = mergeProps(defaultProps, componentProps);

  return (
    <SvgIcon {...props}>
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </SvgIcon>
  );
};
