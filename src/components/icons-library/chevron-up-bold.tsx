import { SvgIcon } from './svg-icon';
import { SvgIconProps } from './svg-icon.d';
import { mergeProps } from 'solid-js';

const defaultProps: SvgIconProps = {
    height: 9,
    width: 14,
    viewBox: '0 0 14 10',
    fill: 'none',
    stroke: 'currentColor',
};

export const ChevronUpBoldIcon = (componentProps: SvgIconProps) => {
    const props = mergeProps(defaultProps, componentProps);

    return (
        <SvgIcon {...props}>
            <path d="M12 2L7.20832 7L2 2" stroke-width="3" stroke-linecap="round" />
        </SvgIcon>
    );
};