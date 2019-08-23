import React from 'react';
// import Mobile from '.';
import { registerRootComponent } from 'expo';
import StoryBook from './stories';

// Need to import and use proper components:
// Storybook or Mobile

export default function App() {
  return (
    <StoryBook />
    // <Mobile />
  );
}

registerRootComponent(App);
