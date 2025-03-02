import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function Chat() {
  const faq = [
    { question: "What is EventSync?", answer: "EventSync is a platform to plan, manage, and collaborate on events effortlessly!" },
    { question: "How do I create an event?", answer: "To create an event, go to the Event Timeline page and click on 'Create Event'." },
    { question: "How do I collaborate with my team?", answer: "You can collaborate with your team using the collaboration chat, share updates, and send messages." },
    { question: "How can I track the event budget?", answer: "You can track your budget by going to the Budget Tracking section where you can add and manage your expenses." },
    { question: "How do I reset my password?", answer: "To reset your password, click on 'Forgot Password' on the login page and follow the instructions." }
  ];

  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleAskQuestion = () => {
    if (!question) return;

    // Add user message immediately
    setChatHistory(prev => [...prev, { user: question, bot: null }]);
    
    // Simulate typing delay
    setIsTyping(true);
    setTimeout(() => {
      const faqAnswer = faq.find(item => item.question.toLowerCase().includes(question.toLowerCase()));
      const answer = faqAnswer ? faqAnswer.answer : "Sorry, I couldn't find an answer to that question. Please try again.";
      
      setChatHistory(prev => [
        ...prev.filter(msg => msg.bot !== null), 
        { user: question, bot: answer }
      ]);
      setIsTyping(false);
    }, 1500);

    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-neutral-800 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-neutral-700 rounded-xl shadow-xl p-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl font-bold text-indigo-400 mb-6"
        >
          EventSync Assistant
        </motion.h1>

        <div className="h-96 bg-neutral-800 rounded-lg p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            <AnimatePresence>
              {chatHistory.map((chat, index) => (
                <div key={index} className="space-y-2">
                  {/* User Message */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-end"
                  >
                    <div className="bg-indigo-600 text-white px-4 py-2 rounded-2xl max-w-md">
                      {chat.user}
                    </div>
                  </motion.div>

                  {/* Bot Message */}
                  {chat.bot && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-neutral-600 text-white px-4 py-2 rounded-2xl max-w-md">
                        {chat.bot}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2 ml-2"
              >
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-neutral-400 rounded-full"
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
                <span className="text-neutral-400">Typing...</span>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAskQuestion()}
              placeholder="Ask about EventSync..."
              className="flex-1 bg-neutral-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAskQuestion}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
            >
              Send
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;