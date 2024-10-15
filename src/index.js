import React from 'react';
import { createRoot } from 'react-dom/client';

//import HooksApp from './HooksApp';
// import CounterApp from './components/useState/CounterApp';
import CounterWithCustomHook from './components/useState/CounterWithCustomHook';

const root = createRoot(document.getElementById('root'));
root.render(
    <CounterWithCustomHook/>,
);

