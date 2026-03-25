import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <h2>SATRIALE'S</h2>
                        <p className={styles.subtitle}>Pork Store & Meat Market</p>
                        <p className={styles.est}>Established 1968</p>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3>Explore</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Prime Meats</Link></li>
                            <li><Link href="/contact">Location</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h3>Visit Us</h3>
                        <p>101 Kearny Avenue</p>
                        <p>Kearny, New Jersey 07032</p>
                        <p className={styles.phone}>(201) 555-0199</p>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {new Date().getFullYear()} Satriale's Pork Store. A DiMeo Family Business.</p>
                </div>
            </div>
        </footer>
    );
}
