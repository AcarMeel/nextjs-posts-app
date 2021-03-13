import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post,
};

const Template = (args) => <Post content={`Working on Figma recreating a Twitter Clone`} date={`12/03/2021`} />;

export const Default = Template.bind({});
