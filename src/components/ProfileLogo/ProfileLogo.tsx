import React from 'react';

import styles from './ProfileLogo.module.css';

type Props = {
  size: string;
  source: string;
  className: string;
};

export function ProfileLogo(props: Props) {
  const sizeStyle = {
    height: props.size,
    width: props.size,
    backgroundImage: `url(${props.source})`,
  };

  return (
    <div
      className={[styles.LogoImage, props.className].join(' ')}
      style={sizeStyle}
    />
  );
}
