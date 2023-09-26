import React from "react";
import styles from "./page.module.css";
import Image from "next/image";


const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>srgeg</h1>
          <p className={styles.desc}>
          qhtthshaethrajyjtsjukykfkrukyukthqhtthshaethraj
          yjtsjukykfkrukyukhtthshaethrajyjtsjukykfkrukyukth
          qhtthshaethrajyjtsjukykfkrukyukthqhtthshaeth
          rajyjtsjukykfk
          </p>
          <div className={styles.author}>
            <Image
              src="/apps.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>wethtrwth</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/apps.jpg"
            alt=""
            width={500}
            height={250}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        qhtthshaethrajyjtsjukykfkrukyukt
        hqhtthshaethrajyjtsjukykfkrukyukthqhtth
        shaethrajyjtsjukykfkrukyukthqhtthshaeth
        rajyjtsjukykfkrukyuk
        qhtthshaethrajyjtsjukykfkrukyukthqhtthshae
        thrajyjtsjukykfkrukyukthqhtthshaethrajyjtsj
        ukykfkrukyukthqht
        </p>
      </div>
    </div>
  );
};

export default BlogPost;