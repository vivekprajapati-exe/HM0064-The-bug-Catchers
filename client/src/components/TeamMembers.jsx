import React from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const TeamMembers = () => {
  const members = [
    { name: 'Alex Chen', role: 'Logistics' },
    { name: 'Sarah Wilson', role: 'Marketing' },
    { name: 'Jordan Smith', role: 'Design' },
    { name: 'Taylor Kim', role: 'Operations' },
  ];

  return (
    <div className="space-y-4">
      {members.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center p-3 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors"
        >
          <UserCircleIcon className="w-8 h-8 text-indigo-400 mr-3" />
          <div>
            <p className="text-white font-medium">{member.name}</p>
            <p className="text-neutral-400 text-sm">{member.role}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamMembers;