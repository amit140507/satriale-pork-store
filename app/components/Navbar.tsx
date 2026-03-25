'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.9)']
    );

    const backdropFilter = useTransform(
        scrollY,
        [0, 50],
        ['blur(0px)', 'blur(10px)']
    );

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.header
                className={styles.header}
                style={{ backgroundColor, backdropFilter }}
            >
                <div className={styles.container}>
                    <div className={styles.brand}>
                        <Link href="/" onClick={() => setIsOpen(false)}>SATRIALE'S</Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className={styles.nav}>
                        {links.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.mobileMenuOverlay}
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
                    >
                        <nav className={styles.mobileNav}>
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                >
                                    <Link
                                        href={link.path}
                                        className={`${styles.mobileNavLink} ${pathname === link.path ? styles.mobileActive : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <motion.div
                            className={styles.mobileFooterInfo}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <p>101 Kearny Ave, Kearny, NJ</p>
                            <p>(201) 555-0199</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
