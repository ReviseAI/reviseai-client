"use client";
import React, { useState } from 'react';

export default function Home() {
  const [textInput, setTextInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const codeBox = document.getElementById('code-box');
    if (codeBox) {
      codeBox.textContent = textInput;
    }
  };

  return (
    <main className={`min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white`}>
      <div className="code-viewer mt-4 max-w-md overflow-hidden">
        <pre>
          <code className="text-gray-200 whitespace-normal" id="code-box">
            test
          </code>
        </pre>
      </div>
      <div className="mt-6 flex">
        <input
          type="text"
          className="bg-gray-800 text-white py-2 px-4 rounded-full border border-gray-700"
          placeholder="Enter text"
          value={textInput}
          onChange={handleInputChange}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300 ml-2"
        >
          Submit
        </button>
      </div>
    </main>
  );
}