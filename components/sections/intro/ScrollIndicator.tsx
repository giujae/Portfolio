import { motion } from 'framer-motion';

export default function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
                delay: 0.6,
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
        </motion.div>
    );
}
