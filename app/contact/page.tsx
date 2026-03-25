'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import styles from './page.module.css';

export default function Contact() {
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <div className="container">
                    <AnimatedText
                        text="PAY US A VISIT"
                        el="h1"
                        className={styles.pageTitle}
                    />
                </div>
            </header>

            <section className={styles.contactSection}>
                <div className={`container ${styles.contactContainer}`}>

                    <motion.div
                        className={styles.infoBlock}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.sectionTitle}>The Storefront</h2>
                        <div className={styles.infoItem}>
                            <MapPin className={styles.icon} />
                            <div>
                                <h3>Location</h3>
                                <p>101 Kearny Avenue<br />Kearny, NJ 07032</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <Clock className={styles.icon} />
                            <div>
                                <h3>Hours of Operation</h3>
                                <p>Monday - Saturday: 8am - 6pm<br />Sunday: 8am - 2pm</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <Phone className={styles.icon} />
                            <div>
                                <h3>Call the Counter</h3>
                                <p>(201) 555-0199</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <Mail className={styles.icon} />
                            <div>
                                <h3>Catering Inquiries</h3>
                                <p>orders@satrialesnj.com</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formBlock}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <h2 className={styles.sectionTitle}>Send a Message</h2>

                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Paulie Walnuts" className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" placeholder="paulie@example.com" className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <select id="subject" className={styles.input}>
                                    <option>Catering Order</option>
                                    <option>General Question</option>
                                    <option>Business Meeting</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} placeholder="Need a full tray of baked ziti for Sunday..." className={styles.textarea}></textarea>
                            </div>

                            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
