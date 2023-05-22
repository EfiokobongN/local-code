import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

export default function MainContent() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div class={`content ${context.theme}`}>
          <h1>Welcome to my app</h1>
          <p>use context API to share data between component.</p>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
