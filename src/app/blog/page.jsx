import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Category = ({params}) => {
  console.log(params)
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container} >
        <div className={styles.imgContainer}>
          <Image 
              className={styles.img}
              src="/illustration.png" 
              alt="" 
              width={400}
              height={250}
            />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container} >
        <div className={styles.imgContainer}>
          <Image 
              className={styles.img}
              src="/illustration.png" 
              alt="" 
              width={400}
              height={250}
            />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container} >
        <div className={styles.imgContainer}>
          <Image 
              className={styles.img}
              src="/illustration.png" 
              alt="" 
              width={400}
              height={250}
            />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  )
}

export default Category
