export const EMAIL_VALIDATION = {
  required: {
    value: true,
    message: "REQUIRED_FIELD"
  },
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: "EMAIL_PATTERN_ERROR"
  }
};
