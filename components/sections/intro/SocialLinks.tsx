import { motion } from 'framer-motion';

export default function SocialLinks() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="absolute top-6 left-6 flex gap-4"
        >
            <a
                href="https://github.com/giujae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 border-b-4 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200 px-2"
            >
                GitHub
            </a>
            <a
                href="https://giujae.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 border-b-4 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-200 px-2"
            >
                Blog
            </a>
        </motion.div>
    );
}
