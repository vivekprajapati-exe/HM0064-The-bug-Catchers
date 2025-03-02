import React, { useState } from 'react';


function Chat(){
  // Predefined questions and answers
  const faq = [
    { question: "What is EventSync?", answer: "EventSync is a platform to plan, manage, and collaborate on events effortlessly!" },
    { question: "How do I create an event?", answer: "To create an event, go to the Event Timeline page and click on 'Create Event'." },
    { question: "How do I collaborate with my team?", answer: "You can collaborate with your team using the collaboration chat, share updates, and send messages." },
    { question: "How can I track the event budget?", answer: "You can track your budget by going to the Budget Tracking section where you can add and manage your expenses." },
    { question: "How do I reset my password?", answer: "To reset your password, click on 'Forgot Password' on the login page and follow the instructions." }
  ];

  // State to store the current question and chat history
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Handle question submission
  const handleAskQuestion = () => {
    // Find matching answer from the predefined FAQ
    const faqAnswer = faq.find(item => item.question.toLowerCase().includes(question.toLowerCase()));

    const answer = faqAnswer ? faqAnswer.answer : "Sorry, I couldn't find an answer to that question. Please try again.";

    // Add both question and answer to chat history
    setChatHistory([...chatHistory, { user: question, bot: answer }]);

    // Clear input field after asking
    setQuestion("");
  };

  return (
    <div className="App">
      <div className="chat-container">
        <h1 className="text-center text-3xl font-bold text-[#353687] mb-5">Team Collaboration</h1>

        {/* Chat Box */}
        <div className="chat-box">
          {chatHistory.map((chat, index) => (
            <div key={index} className="chat-message">
              <div className="user-message"><strong>You:</strong> {chat.user}</div>
              <div className="bot-message"><strong>Bot:</strong> {chat.bot}</div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <input
          type="text"
          className="question-input"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="ask-button"
          onClick={handleAskQuestion}
        >
          Ask
        </button>
      </div>
    </div>
  );
}

export default Chat;