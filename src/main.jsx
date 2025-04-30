import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://b24e50666d2cbe066dc476e3061e04e1@o4509243204370432.ingest.us.sentry.io/4509243205156864",
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false
    })
  ]
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
