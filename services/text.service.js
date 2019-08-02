import { useState } from 'react';

const textService = () => {
  const [text, setText] = useState('');

  return {
    onChange: (t) => setText(t),
    text,
  };
};

export default textService;