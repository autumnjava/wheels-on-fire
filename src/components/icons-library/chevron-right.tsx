import { mergeProps } from 'solid-js';
import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';

const defaultProps: SvgIconProps = {
  height: '19px',
  width: '24px',
  viewBox: '0 0 320 512',
  fill: 'white',
};

export const ChevronRightIcon = (componentProps: SvgIconProps) => {
  const props = mergeProps(defaultProps, componentProps);

  return (
    <SvgIcon {...props}>
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </SvgIcon>
  );
};
