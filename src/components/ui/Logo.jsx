import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Logo({ onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center space-x-3 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center shadow-md bg-white">
        <Image
          src="/logo.png"
          alt="JED logo"
          width={40}
          height={40}
          className="object-contain"
          priority={true}
        />
      </div>
      <div>
        <h1 className="text-lg font-bold text-blue-800">JED Services Financiers</h1>
        <p className="text-xs text-gray-600 -mt-1">inc.</p>
      </div>
    </motion.div>
  );
}