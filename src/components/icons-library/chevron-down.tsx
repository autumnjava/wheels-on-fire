import { mergeProps } from 'solid-js';
import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';

const defaultProps: SvgIconProps = {
  height: '18px',
  width: '24px',
  viewBox: '0 0 512 512',
  fill: 'white',
};

export const ChevronDownIcon = (componentProps: SvgIconProps) => {
  const props = mergeProps(defaultProps, componentProps);

  return (
    <SvgIcon {...props}>
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </SvgIcon>
  );
};
