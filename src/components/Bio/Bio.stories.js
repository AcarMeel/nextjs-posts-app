import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
};

const Template = (args) => <Bio headshot="https://pbs.twimg.com/profile_images/1341422618214330371/zfMI_v2S_400x400.jpg" name="Acarmeel" tagline="Frontend Dev" role="Developer @ somewhere" />;

export const Default = Template.bind({});
