import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '../../components/Button/Button';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Let's keep in touch.
      </h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input} />
          <input type='text' placeholder='email' className={styles.input} />
          <textarea 
            className={styles.textArea} 
            placeholder="message"
            cols={30} 
            rows={10}>
          </textarea>
         <Button url="#" text="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default Contact
