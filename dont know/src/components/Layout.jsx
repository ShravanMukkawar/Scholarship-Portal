// components/Layout.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import ChatBot from './chatbot'; // Corrected path to ChatBot

const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <ChatBot />
    </div>
  );
};

// Define prop types for the Layout component
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node
};

export default Layout;
