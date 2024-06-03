import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';
import { mergeProps } from 'solid-js';

const defaultProps: SvgIconProps = {
  height: '19px',
  width: '24px',
  stroke: 'white',
  viewBox: '0 0 9 12',
};

export const ChevronUpIcon = (componentProps: SvgIconProps) => {
  const props = mergeProps(defaultProps, componentProps);

  return (
    <SvgIcon {...props}>
      <path stroke-linecap="round" stroke-width="2" d="M11 2 6 7 1 2" />
    </SvgIcon>
  );
};
