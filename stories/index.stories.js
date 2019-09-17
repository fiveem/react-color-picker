import React from 'react';
import { storiesOf } from '@storybook/react';

import ColorPickerDemo from './ColorPickerDemo'

storiesOf('ColorPicker', module)
    .add('simple color picker', () => {

        return <ColorPickerDemo />
    }
);