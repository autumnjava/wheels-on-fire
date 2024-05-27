import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';
import { mergeProps } from 'solid-js';

const defaultProps: SvgIconProps = {
    height: 37,
    width: 26,
    fill: 'currentColor',
    viewBox: '0 0 37 26'
};

export const HamburgerMenuIcon = (componentProps: SvgIconProps) => {
    const props = mergeProps(defaultProps, componentProps);

    return (
        <SvgIcon {...props}>
            <rect y="0.48291" width="37" height="3" rx="1.5"/>
            <rect x="2" y="11.4829" width="33" height="3" rx="1.5"/>
            <rect y="22.4829" width="37" height="3" rx="1.5"/>
        </SvgIcon>
    );
};