export const initialFormValues = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactField(name, value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return 'This field is required.';
  }

  if (name === 'email' && !validateEmail(trimmedValue)) {
    return 'Enter a valid email address.';
  }

  return '';
}
