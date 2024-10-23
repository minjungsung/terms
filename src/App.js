import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Terms component
function Terms() {
  return (
    <div>
      <h2>Privacy Policy for Undead Survivor</h2>
      <p>Effective Date: 2024-10-23</p>
      <p>Thank you for playing Undead Survivor! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our game.</p>

      <h3>1. Information We Collect</h3>
      <p>Undead Survivor does not collect any personal information from its users. We do not require you to create an account or provide any personal details to play the game.</p>

      <h3>2. Non-Personal Information</h3>
      <p>While playing Undead Survivor, we may collect non-personal information such as device type, operating system, and gameplay statistics. This information is used solely to improve the game experience and is not linked to any personal information.</p>

      <h3>3. Use of Information</h3>
      <p>The non-personal information we collect is used for the following purposes:</p>
      <ul>
        <li>To improve game performance and user experience.</li>
        <li>To analyze gameplay trends and statistics.</li>
      </ul>

      <h3>4. Sharing of Information</h3>
      <p>We do not share any personal or non-personal information with third parties, except as required by law or to protect our rights.</p>

      <h3>5. Data Security</h3>
      <p>We take reasonable measures to protect the information we collect from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>

      <h3>6. Changes to This Privacy Policy</h3>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

      <h3>7. Contact Us</h3>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at [Your Contact Information].</p>

      <p>By playing Undead Survivor, you agree to the terms outlined in this Privacy Policy.</p>

      <p>Undead Survivor</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/" element={
            <div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;