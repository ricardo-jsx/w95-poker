import React from 'react';

import Icon from './Icon';

import TextIcon from './imgs/text.png';
import SolitaireIcon from './imgs/solitaire.png';
import RecycleIcon from './imgs/recycle.png';

export const Text = (props) => <Icon {...props} img={TextIcon} />;
export const Solitaire = (props) => <Icon {...props} img={SolitaireIcon} />;
export const RecycleBin = (props) => <Icon {...props} img={RecycleIcon} />;
