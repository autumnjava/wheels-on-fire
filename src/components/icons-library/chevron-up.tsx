import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';
import { mergeProps } from 'solid-js';

const defaultProps: SvgIconProps = {
    height: 9,
    width: 12,
    stroke: 'currentColor',
    viewBox: '0 0 9 12',
    fill: 'none'
};

export const ChevronUpIcon = (componentProps: SvgIconProps) => {
    const props = mergeProps(defaultProps, componentProps);

    return (
        <SvgIcon {...props}>
            <path stroke-linecap="round" stroke-width="2" d="M11 2 6 7 1 2"/>
        </SvgIcon>
    );
};