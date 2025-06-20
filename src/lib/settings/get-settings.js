// src/lib/settings/get-settings.js

'use server';

import { cookies } from 'next/headers';
import { logger } from '@/lib/default-logger';

/**
 * The defaults your app expects if no cookie is set,
 * or if the cookie is malformed.
 */
const DEFAULT_SETTINGS = {
  theme: 'light',
  notifications: true,
  itemsPerPage: 20,
  // …other default values…
};

/**
 * Retrieve the settings from the client's cookies.
 * This should only be used in Server Components.
 */
export async function getSettings() {
  let cookieStore;
  try {
    cookieStore = cookies();
  } catch (err) {
    logger.error('Failed to access cookie store', { error: err });
    return { ...DEFAULT_SETTINGS };
  }

  const settingsStr = cookieStore.get('app.settings')?.value;
  if (!settingsStr) {
    // No cookie: return a fresh copy of defaults
    return { ...DEFAULT_SETTINGS };
  }

  let parsed;
  try {
    parsed = JSON.parse(settingsStr);
  } catch (err) {
    logger.error('Unable to parse app.settings cookie', {
      rawValue: settingsStr,
      error: err,
    });
    return { ...DEFAULT_SETTINGS };
  }

  // Merge parsed settings over defaults
  return {
    ...DEFAULT_SETTINGS,
    ...parsed,
  };
}

