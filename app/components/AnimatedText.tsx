'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    className?: string;
    delay?: number;
}

export default function AnimatedText({
    text,
    el: Wrapper = 'p',
    className = '',
    delay = 0,
}: AnimatedTextProps) {
    const textArray = Array.isArray(text) ? text : [text];

    const container = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <Wrapper className={className}>
            <motion.span
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                style={{ display: 'inline-block' }}
            >
                {textArray.map((line, lineIndex) => (
                    <span key={`${line}-${lineIndex}`} style={{ display: 'block', overflow: 'hidden' }}>
                        {line.split(' ').map((word, index) => (
                            <motion.span
                                variants={child}
                                key={`${word}-${index}`}
                                style={{ display: 'inline-block', marginRight: '0.25em' }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    );
}
