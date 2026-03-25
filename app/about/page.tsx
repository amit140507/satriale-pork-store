'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import styles from './page.module.css';

export default function About() {
    return (
        <div className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <AnimatedText
                        text={["OUR", "BLOODLINE"]}
                        el="h1"
                        className={styles.heroTitle}
                    />
                </div>
            </section>

            <section className={styles.storySection}>
                <div className={`container ${styles.storyContainer}`}>

                    <div className={styles.imageBlock}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={styles.imageWrapper}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                                alt="Vintage Butcher Shop"
                                fill
                                className={styles.image}
                            />
                        </motion.div>
                    </div>

                    <div className={styles.textBlock}>
                        <AnimatedText text="A NEIGHBORHOOD INSTITUTION" el="h2" className={styles.title} />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <p className={styles.paragraph}>
                                Founded in 1968, Satriale's has been the cornerstone of Kearny, New Jersey.
                                What started as a modest neighborhood butcher shop has naturally evolved into
                                a sanctuary for premium meats, sharp provolone, and authentic Italian espresso.
                            </p>
                            <p className={styles.paragraph}>
                                More importantly, it's a place where relationships are forged. Our backroom
                                has seen generations of community leaders, businessmen, and friends come
                                together over a game of cards and a good cigar.
                            </p>
                            <p className={styles.paragraph}>
                                We don't just sell meat; we honor a legacy. The DiMeo family approach isn't
                                just business—it's personal.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </section>
        </div>
    );
}
