'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedText from './components/AnimatedText';
import styles from './page.module.css';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section ref={containerRef} className={styles.hero}>
        <motion.div style={{ y, opacity }} className={styles.heroImageContainer}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Satriale%27s_Pork_Store.jpg/1200px-Satriale%27s_Pork_Store.jpg"
            alt="Satriale's Pork Store Exterior"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.overlay} />
        </motion.div>

        <div className={styles.heroContent}>
          <AnimatedText
            text={["A FAMILY", "TRADITION"]}
            el="h1"
            className={styles.heroTitle}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className={styles.heroSubtitle}>Finest Meats in North Jersey since 1968.</p>
            <Link href="/about" className="btn btn-primary mt-xl">
              Our Legacy
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={`container ${styles.introContainer}`}>
          <div className={styles.introLeft}>
            <AnimatedText
              text="MORE THAN JUST A BUTCHER SHOP"
              el="h2"
              className={styles.sectionTitle}
            />
          </div>
          <div className={styles.introRight}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.introText}
            >
              Step into Satriale’s and you step into history. We've been serving the community
              the highest quality veal, sausages, and prime cuts for decades. It's a place where
              business gets done, espresso is always brewing, and everybody knows your name.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className={styles.featuredSection}>
        <div className="container">
          <AnimatedText text="WHAT WE DO" el="h2" className={`${styles.sectionTitle} text-center mb-xl`} />
          <div className={styles.servicesGrid}>
            {[
              {
                title: "Prime Cuts",
                desc: "Dry-aged steaks, fresh veal, and our famous sweet sausage.",
                img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "The Espresso Bar",
                desc: "Classic Italian espresso, sfogliatelle, and cannolis made fresh daily.",
                img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Catering",
                desc: "Authentic hero sandwiches, baked ziti, and antipasto for any occasion.",
                img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800"
              }
            ].map((service, idx) => (
              <motion.div
                key={service.title}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
              >
                <div className={styles.serviceImageWrapper}>
                  <Image src={service.img} alt={service.title} fill className={styles.serviceImage} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-xl">
            <Link href="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
