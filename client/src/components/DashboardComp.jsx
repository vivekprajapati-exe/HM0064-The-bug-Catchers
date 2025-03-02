// components/Dashboard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BarChart, Users, DollarSign, Activity } from 'react-feather';
import TeamMembers from './TeamMembers';
import {EventTimelineComp as EventCalendar}  from './index';
const DashboardComp = () => {
  const stats = [
    { id: 1, title: 'Total Events', value: '12', icon: Calendar, color: 'bg-indigo-600' },
    { id: 2, title: 'Active Budget', value: '$15,320', icon: DollarSign, color: 'bg-emerald-600' },
    { id: 3, title: 'Team Members', value: '8', icon: Users, color: 'bg-amber-600' },
    { id: 4, title: 'Tasks Completed', value: '84%', icon: Activity, color: 'bg-rose-600' },
  ];

  const upcomingEvents = [
    { id: 1, title: 'Product Launch', date: '2023-08-25', progress: 75 },
    { id: 2, title: 'Team Workshop', date: '2023-08-28', progress: 40 },
    { id: 3, title: 'Client Meeting', date: '2023-09-01', progress: 20 },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back, Sarah</h1>
          <p className="text-neutral-400">Event Coordinator · Last login: 2h ago</p>
        </div>
        <button className="p-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors">
          <span className="text-white">🔔</span>
        </button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 rounded-2xl ${stat.color} text-white`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-indigo-100">{stat.title}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 opacity-90" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-800 p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map(event => (
                <div key={event.id} className="bg-neutral-700 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-medium">{event.title}</h3>
                    <span className="text-neutral-400 text-sm">{event.date}</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div className="flex-1">
                        <div className="h-2 bg-neutral-600 rounded-full">
                          <div 
                            className="h-2 bg-indigo-500 rounded-full transition-all duration-500" 
                            style={{ width: `${event.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-semibold ml-3 text-indigo-400">
                        {event.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-800 p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Event Calendar</h2>
            <EventCalendar compact />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-800 p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Team Members</h2>
            <TeamMembers />
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-800 p-6 rounded-2xl"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[
                'New event "Product Launch" created',
                'Budget updated for Q3',
                '3 new team members joined',
                'Client meeting scheduled'
              ].map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-neutral-700 rounded-lg"
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2" />
                  <p className="text-neutral-300">{activity}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;