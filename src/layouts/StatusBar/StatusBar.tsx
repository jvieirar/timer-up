import React from 'react';

import styles from './StatusBar.module.scss';

interface Props {}

const StatusBar = (props: Props) => {
  return <footer className={styles.statusBar}></footer>;
};

export default StatusBar;
