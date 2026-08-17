import { supabase } from './supabaseClient';

// Compatibility shim to minimise changes during migration.
// Exposes a subset of the old `base44.auth` API used across the app.
export const base44 = {
  auth: {
    loginViaEmailPassword: async (email, password) => {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      return data;
    },

    loginWithProvider: (provider, redirectTo = '/') => {
      // provider example: 'google'
      supabase.auth.signInWithOAuth({ provider, options: { redirectTo } });
    },

    register: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      return data;
    },

    verifyOtp: async ({ email, otpCode }) => {
      // The previous app expected an OTP flow. For now, attempt a password sign-in
      // using the otpCode as the password. You should replace this with your
      // desired verification flow (magic link or server-backed OTP) after migration.
      const { data, error } = await supabase.auth.signInWithPassword({ email, password: otpCode });
      if (error) throw error;
      return data;
    },

    setToken: (token) => {
      if (typeof window !== 'undefined') {
        try {
          window.localStorage.setItem('access_token', token);
        } catch (e) {
          // ignore
        }
      }
    },

    me: async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) throw error;
      return data.user;
    },

    logout: async (redirectUrl) => {
      await supabase.auth.signOut();
      if (redirectUrl && typeof window !== 'undefined') {
        window.location.href = redirectUrl;
      }
    },

    redirectToLogin: (redirectUrl) => {
      if (typeof window !== 'undefined') {
        const url = `/login?from_url=${encodeURIComponent(redirectUrl || window.location.href)}`;
        window.location.href = url;
      }
    }
  }
};
