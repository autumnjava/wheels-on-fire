import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';
import { mergeProps } from 'solid-js';

const defaultProps: SvgIconProps = {
    height: 36,
    width: 36,
    fill: 'currentColor',
    viewBox: '0 0 36 36'
};

export const CloseIcon = (componentProps: SvgIconProps) => {
    const props = mergeProps(defaultProps, componentProps);

    return (
        <SvgIcon {...props}>
            <rect x="7.5" y="27" width="27.75" height="2.25" rx="1.125" transform="rotate(-45 7.5 27)" />
            <rect width="27.75" height="2.25" rx="1.125" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 28.5 27)" />
        </SvgIcon>
    );
};