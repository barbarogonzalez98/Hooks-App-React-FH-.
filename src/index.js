import React from 'react';
import { createRoot } from 'react-dom/client';
//import HooksApp from './HooksApp';
// import CounterApp from './components/useState/CounterApp';
// import CounterWithCustomHook from './components/useState/CounterWithCustomHook';
// import { SimpleForm } from './components/useEffect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExamplesRef } from './components/04-useRef/RealExamplesRef';
import { Layout } from './components/05-useLayoutEffect/Layout';

const root = createRoot(document.getElementById('root'));
root.render(
    <Layout/>,
);

