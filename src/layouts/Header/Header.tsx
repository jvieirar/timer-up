import React from 'react';

import styles from './Header.module.scss';

interface Props {
  title: string;
}

const Header = (props: Props) => {
  const { title } = props;

  return <header className={styles.header}>{title}</header>;
};

export default Header;
