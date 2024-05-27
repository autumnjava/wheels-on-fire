import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';
import { mergeProps } from 'solid-js';

const defaultProps: SvgIconProps = {
    height: 12,
    width: 13,
    viewBox: '0 0 12 13',
    stroke: 'currentColor',
    fill: 'none',
    preserveAspectRatio: 'xMidYMid meet'
};

export const ButtonArrowRightIcon = (componentProps: SvgIconProps) => {
    const props = mergeProps(defaultProps, componentProps);

    return (
        <SvgIcon {...props}>
            <path d="M1 5.833h10.333M6.667 1.167l4.666 4.666L6.666 10.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </SvgIcon>
    );
};