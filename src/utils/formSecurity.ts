
/**
 * Sanitizes user input to prevent XSS attacks
 * 
 * @param input - The user input string to sanitize
 * @returns Sanitized string safe for rendering
 */
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

/**
 * Generates a CSRF token for form protection
 * 
 * @returns A random string to be used as CSRF token
 */
export const generateCSRFToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

/**
 * Validates an email address format
 * 
 * @param email - The email address to validate
 * @returns Boolean indicating if the email format is valid
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a phone number format
 * 
 * @param phone - The phone number to validate
 * @returns Boolean indicating if the phone format is valid
 */
export const validatePhone = (phone: string): boolean => {
  // Basic phone validation - can be expanded based on requirements
  const phoneRegex = /^\+?[0-9\s\-()]+$/;
  return phoneRegex.test(phone);
};
