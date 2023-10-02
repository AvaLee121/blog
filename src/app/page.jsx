import Image from 'next/image';
import styles from './page.module.css';
import Button from '../components/Button/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the global industry.
        </p>
        <Button url='/portfolio' text='See Our Works'/>
      </div>
      
      <div className={styles.item}>
      <Image src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={500} height={500} alt="" className={styles.img}/>
      </div>

    </div>
  );
}

