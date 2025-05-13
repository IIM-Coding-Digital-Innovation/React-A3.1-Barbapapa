import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";

Sentry.init({
    dsn: "https://948a11657a403b84d9c7e2416ebf7806@o4509310157324288.ingest.de.sentry.io/4509310158962768",
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.browserProfilingIntegration()
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    tracePropagationTargets: ["prod", /^https:\/\/barbapapa\.netlify\.app\/api/],
    sendDefaultPii: true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
