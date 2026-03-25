'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import styles from './page.module.css';

const services = [
    {
        title: "Prime Cuts & Dry Aging",
        description: "Our butchers are old-school. They know the anatomy of every cut. Whether you're looking for a milk-fed veal chop, a perfectly marbled ribeye, or our signature homemade Italian sweet and hot sausages, we only source the absolute best. We dry-age in house for maximum flavor.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200",
        features: ["USDA Prime Beef", "House-made Sausage", "Milk-fed Veal", "Pancetta & Prosciutto"]
    },
    {
        title: "The Deli Counter",
        description: "Forget what you know about sandwiches. At Satriale's, a hero is a work of art. Layers of imported capicola, thinly sliced prosciutto di Parma, fresh mozzarella made this morning, roasted peppers, and just the right amount of oil and vinegar. It's the taste of Kearny.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=1200",
        features: ["Imported Cold Cuts", "Fresh Mozzarella Daily", "Signature Heroes", "Olive Bar"]
    },
    {
        title: "Catering & Events",
        description: "Hosting the family on Sunday? Leave the heavy lifting to us. We offer half and full trays of baked ziti, eggplant parmigiana, sausage and peppers, and massive antipasto platters. Because when you eat with us, you eat like a boss.",
        image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=1200",
        features: ["Antipasto Platters", "Hot Trays", "Corporate Lunches", "Holiday Specials"]
    }
];

export default function Services() {
    return (
        <div className={styles.main}>
            <header className={styles.header}>
                <div className="container">
                    <AnimatedText
                        text="OUR SPECIALTIES"
                        el="h1"
                        className={styles.pageTitle}
                    />
                </div>
            </header>

            <section className={styles.servicesSection}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceRow}>
                        <div className={`container ${styles.serviceContainer} ${index % 2 !== 0 ? styles.reverse : ''}`}>

                            <motion.div
                                className={styles.imageBlock}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className={styles.image}
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className={styles.textBlock}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                <h2 className={styles.serviceTitle}>{service.title}</h2>
                                <div className={styles.divider} />
                                <p className={styles.serviceDesc}>{service.description}</p>
                                <ul className={styles.featuresList}>
                                    {service.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>

                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
