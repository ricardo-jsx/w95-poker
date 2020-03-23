import React from 'react';

import Icon from './Icon';

import TextIcon from './imgs/text.png';
import RecycleIcon from './imgs/recycle.png';

export const Text = (props) => <Icon {...props} img={TextIcon} />;
export const Poker = (props) => <Icon {...props} img={TextIcon} />;
export const RecycleBin = (props) => <Icon {...props} img={RecycleIcon} />;
