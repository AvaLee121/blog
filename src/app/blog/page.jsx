import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 10 } })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const blog = async () => {
  const data = await getData(); 
  
  return (
    <div className={styles.mainContainer}>
      {data.map(item => (
        <Link href="/blog/testId" className={styles.container} key={item.id}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default blog
