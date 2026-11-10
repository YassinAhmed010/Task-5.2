import DOMPurify from 'dompurify';

// Treat stored reviews as untrusted on every render, including older reviews.
// Keep light formatting; omit images, SVG, forms, scripts, CSS, and event handlers.
export const sanitizeHtml = (dirty) => DOMPurify.sanitize(
  typeof dirty === 'string' ? dirty : '',
  {
    ALLOWED_TAGS: [
      'p', 'br', 'b', 'strong', 'i', 'em', 'u', 's',
      'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a'
    ],
    ALLOWED_ATTR: ['href', 'title'],
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false,
    // Keep DOMPurify's built-in URL filtering (javascript: is rejected).
    RETURN_TRUSTED_TYPE: false
  }
);
