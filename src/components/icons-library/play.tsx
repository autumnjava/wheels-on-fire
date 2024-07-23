import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';
import { mergeProps } from 'solid-js';

const defaultProps: SvgIconProps = {
  height: '37px',
  width: '26px',
  fill: 'white',
  viewBox: '0 0 158.75 158.76',
};

export const PlayIcon = (componentProps: SvgIconProps) => {
  const props = mergeProps(defaultProps, componentProps);

  return (
    <SvgIcon {...props}>
      <path
        class="cls-1"
        d="M158.75,79.38A79.38,79.38,0,1,1,79.5,0,79.27,79.27,0,0,1,158.75,79.38ZM79.31,150.61A71.23,71.23,0,1,0,8.15,79.27,71.27,71.27,0,0,0,79.31,150.61Z"
      />
      <path
        class="cls-1"
        d="M52.23,29.58l86.4,49.89-86.4,49.89Zm8.17,85.59c20.62-11.92,41.11-23.74,61.82-35.7L60.4,43.77Z"
      />
    </SvgIcon>
  );
};
