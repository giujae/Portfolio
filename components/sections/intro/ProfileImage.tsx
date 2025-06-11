import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileImage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -mt-35 w-[480px] h-auto md:w-[640px]"
        >
            <Image
                src="/profile.png"
                alt="프로필 이미지"
                width={640}
                height={640}
                className="object-contain"
                priority
            />
        </motion.div>
    );
}
