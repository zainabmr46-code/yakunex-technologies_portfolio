
# Testing Documentation

## Testing Overview

Testing was performed to check the main website features, frontend-backend communication, enquiry management, and user experience.

## Functional Testing

| Test Case | Expected Result | Actual Result |
|---|---|---|
| Open Home page | Home page loads correctly | Pass |
| Navigate between pages | Correct page opens | Pass |
| Submit contact form | Enquiry is saved in database | Pass |
| Submit invalid form data | Validation errors are displayed | Update after testing |
| Admin login | Authorized administrator can log in | Update after testing |
| View enquiries | Enquiries are displayed in admin area | Update after testing |
| Update enquiry status | Status is updated successfully | Pass if verified |
| Email notification | Email is received for a tested status update | Pass – In Progress status tested |
| Delete enquiry | Selected enquiry is deleted | Update after testing |

## Responsive Design Testing

The website layout was checked using browser developer tools and responsive device emulation.

Areas reviewed:
- Desktop layout
- Tablet layout
- Mobile layout
- Navigation menu
- Text and images
- Buttons and cards
- Contact form
- Footer
- Horizontal scrolling and layout overlap

## Security and Reliability Checks

- Administrator routes use authentication and admin authorization.
- Contact form data is validated by the backend.
- Environment credentials are kept outside the source repository.
- Error handling is included for relevant application operations.

## Testing Limitations

Responsive checks using browser emulation do not replace testing on every physical device. Further testing can be performed on additional browsers and devices.
