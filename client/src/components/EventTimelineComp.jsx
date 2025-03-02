import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Edit, Plus, X, Info } from "lucide-react";

const EventTimelineComp = () => {
  const [events, setEvents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      ...formData,
      id: Date.now()
    };
    setEvents([...events, newEvent]);
    setIsFormOpen(false);
    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: ""
    });
  };

  const getEventDuration = (start, end) => {
    const options = { hour: 'numeric', minute: '2-digit' };
    return `${new Date(start).toLocaleTimeString([], options)} - ${new Date(end).toLocaleTimeString([], options)}`;
  };

  return (
    <div className="min-h-screen bg-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Calendar className="w-8 h-8 text-blue-600" />
            Event Timeline
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Create Event
          </motion.button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-neutral-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <span className="bg-neutral-900 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {new Date(event.startDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-5 h-5" />
                  <span>{getEventDuration(
                    `${event.startDate}T${event.startTime}`,
                    `${event.endDate}T${event.endTime}`
                  )}</span>
                </div>
                <p className="text-gray-600 line-clamp-2">{event.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Create Event Modal */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
            >
              <motion.form
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onSubmit={handleSubmit}
                className="bg-neutral-900 rounded-2xl p-8 max-w-xl w-full shadow-xl"
              >
                <div className="flex justify-between items-center mb-6 z-999999999999999999999">
                  <h2 className="text-2xl font-bold">Create New Event</h2>
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Title</label>
                    <input
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 h-32"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Date</label>
                      <input
                        type="date"
                        required
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">End Date</label>
                      <input
                        type="date"
                        required
                        value={formData.endDate}
                        min={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Start Time</label>
                      <input
                        type="time"
                        required
                        value={formData.startTime}
                        onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">End Time</label>
                      <input
                        type="time"
                        required
                        value={formData.endTime}
                        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsFormOpen(false)}
                      className="px-6 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Create Event
                    </motion.button>
                  </div>
                </div>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Event Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-neutral-900 rounded-2xl p-8 max-w-2xl w-full shadow-xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold">{selectedEvent.title}</h2>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-6">

                <div className="flex items-start gap-4">
                    <div className="p-3 bg-neutral-700 rounded-lg">
                      <Info className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium mb-2">Description</p>
                      <p className="text-gray-600 whitespace-pre-line">
                        {selectedEvent.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neutral-700 rounded-lg">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-gray-600">
                        {new Date(selectedEvent.startDate).toLocaleDateString()} - {' '}
                        {new Date(selectedEvent.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-neutral-700 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-gray-600">
                        {getEventDuration(
                          `${selectedEvent.startDate}T${selectedEvent.startTime}`,
                          `${selectedEvent.endDate}T${selectedEvent.endTime}`
                        )}
                      </p>
                    </div>
                  </div>

             


                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventTimelineComp;