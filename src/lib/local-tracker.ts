import { addAnalyticsPlugin } from "@uniformdev/optimize-tracker-analytics"
import { createDefaultTracker } from "@uniformdev/optimize-tracker-browser"
import { createCookieStorage } from "./cookie-storage"
import { analytics } from './google-analytics';
import intentManifest from "./intentManifest.json" 
import Cookies from 'js-cookie';

export const localTracker = createDefaultTracker({
  intentManifest,
  addPlugins: [addAnalyticsPlugin({ analytics })],
  storage: {
      scoring: createCookieStorage(Cookies)
  },
  logLevelThreshold: process.env.NODE_ENV === "production" ? "error" : "info",
})
