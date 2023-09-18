import React from 'react';
import styles from '@/styles/header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.flexitem}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="건강증진센터" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
