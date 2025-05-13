import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";
import { BrowserRouter } from 'react-router-dom'; // ✅

Sentry.init({
    dsn: "https://948a11657a403b84d9c7e2416ebf7806@o4509310157324288.ingest.de.sentry.io/4509310158962768",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.browserProfilingIntegration()
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: ["prod", /^https:\/\/barbapapa\.netlify\.app\/api/],
    sendDefaultPii: true
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
