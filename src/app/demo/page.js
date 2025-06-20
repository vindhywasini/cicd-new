// src/app/demo/page.js
'use client';               // ← must be the very first line

import React, { useState } from 'react';

export default function DemoPage() {
  const [count, setCount] = useState(0);

  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center',
    }}>
      <h1>Demo Page (Client Component) 🚀</h1>
      <p>This page is now a Client Component, so you can use React state.</p>
      <p>
        <strong>Counter:</strong> {count}
      </p>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Increment
      </button>
    </main>
  );
}
