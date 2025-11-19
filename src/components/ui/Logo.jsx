import { motion } from 'framer-motion';

export default function Logo({ onClick }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }} 
      className="flex items-center space-x-3 cursor-pointer" 
      onClick={onClick}
    >
      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-lg">JED</span>
      </div>
      <div>
        <h1 className="text-lg font-bold text-blue-800">JED Services Financiers</h1>
        <p className="text-xs text-gray-600 -mt-1">inc.</p>
      </div>
    </motion.div>
  );
}