# Email Configuration Setup

## Required Environment Variables

Add these to your `.env.local` file:

```bash
# Email Service (Resend)
RESEND_API_KEY="your-resend-api-key-here"
FROM_EMAIL="bookings@smartworld.travel"
OPERATIONS_EMAIL="operations@smartworld.travel"
```

## Getting Your Resend API Key

1. **Sign up for Resend**: Visit [https://resend.com](https://resend.com) and create an account
2. **Get API Key**: Go to your dashboard and create a new API key
3. **Domain Setup**: Add your domain (e.g., `smartworld.travel`) and verify it
4. **Update Environment**: Add the API key to your `.env.local` file

## Email Addresses Configuration

- **FROM_EMAIL**: The email address that booking confirmations will be sent from
- **OPERATIONS_EMAIL**: The email address where new booking notifications will be sent

## Testing Email Setup

Once configured, you can test the email functionality by:

1. Making a test booking through the API
2. Checking the console logs for email send results
3. Verifying emails are received at the configured addresses

## Email Templates

The system includes two beautiful email templates:

1. **BookingConfirmationEmail**: Sent to guests with booking details
2. **OperationsNotificationEmail**: Sent to operations team with booking alerts

Both templates are built with React Email components for consistent, professional appearance across all email clients.
