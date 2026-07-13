import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials not configured for newsletter');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Web3Forms fallback
const web3formsAccessKey = process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || '';

/**
 * Subscribe to newsletter via Web3Forms (fallback)
 * @param {string} email - User's email address
 * @returns {Promise<{success: boolean, error: string | null}>}
 */
const subscribeViaWeb3Forms = async (email) => {
  if (!web3formsAccessKey) {
    return { success: false, error: 'Web3Forms not configured' };
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: web3formsAccessKey,
        subject: 'New Newsletter Subscription - MySimhastha',
        email: email.trim().toLowerCase(),
        message: `New subscriber: ${email.trim().toLowerCase()}`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, error: null };
    }
    return { success: false, error: result.message || 'Failed to subscribe' };
  } catch (error) {
    console.error('Web3Forms error:', error);
    return { success: false, error: 'Network error. Please try again.' };
  }
};

/**
 * Subscribe to newsletter
 * @param {string} email - User's email address
 * @returns {Promise<{success: boolean, error: string | null}>}
 */
export const subscribeToNewsletter = async (email) => {
  if (!email || !email.trim()) {
    return { success: false, error: 'Email is required' };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  try {
    // Check if email already exists
    const { data: existing, error: checkError } = await supabase
      .from('newsletter_subscribers')
      .select('id')
      .eq('email', email.trim().toLowerCase());

    // If we found an existing record, email is already subscribed
    if (existing && existing.length > 0) {
      return { success: false, error: 'You are already subscribed!' };
    }

    // Insert new subscriber
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([
        {
          email: email.trim().toLowerCase(),
          active: true,
        }
      ])
      .select();

    if (error) {
      console.error('Newsletter subscription error:', error);
      // Check if table doesn't exist - fallback to Web3Forms
      if (error.message?.includes('relation "newsletter_subscribers" does not exist') || 
          error.message?.includes('Could not find table') ||
          error.message?.includes('table "newsletter_subscribers" does not exist')) {
        ('Supabase table not found, using Web3Forms fallback');
        return await subscribeViaWeb3Forms(email);
      }
      return { success: false, error: error.message || 'Failed to subscribe. Please try again.' };
    }

    return { success: true, error: null, data };
  } catch (error) {
    console.error('Unexpected error in newsletter subscription:', error);
    // Fallback to Web3Forms on any error
    return await subscribeViaWeb3Forms(email);
  }
};

/**
 * Get all subscribers count (for admin purposes)
 * @returns {Promise<{count: number, error: string | null}>}
 */
export const getSubscribersCount = async () => {
  try {
    const { count, error } = await supabase
      .from('newsletter_subscribers')
      .select('id', { count: 'exact' })
      .eq('active', true);

    if (error) {
      return { count: 0, error: error.message };
    }

    return { count: count || 0, error: null };
  } catch (error) {
    return { count: 0, error: error.message };
  }
};