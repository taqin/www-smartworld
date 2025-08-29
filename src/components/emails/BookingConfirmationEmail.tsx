import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
} from '@react-email/components';

interface BookingConfirmationEmailProps {
  guestName: string;
  bookingId: string;
  listingTitle: string;
  listingImage: string;
  checkIn: string;
  checkOut: string;
  guests: {
    adults: number;
    children: number;
    infants: number;
  };
  pricing: {
    subtotal: number;
    serviceFee: number;
    cleaningFee: number;
    taxes: number;
    total: number;
  };
  hostName: string;
  hostEmail: string;
  listingAddress: string;
}

export default function BookingConfirmationEmail({
  guestName,
  bookingId,
  listingTitle,
  listingImage,
  checkIn,
  checkOut,
  guests,
  pricing,
  hostName,
  hostEmail,
  listingAddress,
}: BookingConfirmationEmailProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>SmartWorld Travel</Text>
            <Text style={headerText}>Booking Confirmed! 🎉</Text>
          </Section>

          {/* Booking Details */}
          <Section style={section}>
            <Text style={greeting}>Hi {guestName},</Text>
            <Text style={paragraph}>
              Great news! Your booking has been confirmed. Here are your trip details:
            </Text>
          </Section>

          {/* Property Info */}
          <Section style={propertySection}>
            <img
              src={listingImage}
              alt={listingTitle}
              style={propertyImage}
            />
            <Text style={propertyTitle}>{listingTitle}</Text>
            <Text style={propertyAddress}>{listingAddress}</Text>
          </Section>

          <Hr style={hr} />

          {/* Trip Details */}
          <Section style={section}>
            <Text style={sectionTitle}>Trip Details</Text>
            <div style={detailRow}>
              <Text style={detailLabel}>Booking ID:</Text>
              <Text style={detailValue}>{bookingId}</Text>
            </div>
            <div style={detailRow}>
              <Text style={detailLabel}>Check-in:</Text>
              <Text style={detailValue}>{formatDate(checkIn)}</Text>
            </div>
            <div style={detailRow}>
              <Text style={detailLabel}>Check-out:</Text>
              <Text style={detailValue}>{formatDate(checkOut)}</Text>
            </div>
            <div style={detailRow}>
              <Text style={detailLabel}>Guests:</Text>
              <Text style={detailValue}>
                {guests.adults} adults
                {guests.children > 0 && `, ${guests.children} children`}
                {guests.infants > 0 && `, ${guests.infants} infants`}
              </Text>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Pricing Breakdown */}
          <Section style={section}>
            <Text style={sectionTitle}>Pricing Details</Text>
            <div style={pricingRow}>
              <Text style={pricingLabel}>Subtotal:</Text>
              <Text style={pricingValue}>{formatCurrency(pricing.subtotal)}</Text>
            </div>
            <div style={pricingRow}>
              <Text style={pricingLabel}>Service fee:</Text>
              <Text style={pricingValue}>{formatCurrency(pricing.serviceFee)}</Text>
            </div>
            <div style={pricingRow}>
              <Text style={pricingLabel}>Cleaning fee:</Text>
              <Text style={pricingValue}>{formatCurrency(pricing.cleaningFee)}</Text>
            </div>
            <div style={pricingRow}>
              <Text style={pricingLabel}>Taxes:</Text>
              <Text style={pricingValue}>{formatCurrency(pricing.taxes)}</Text>
            </div>
            <Hr style={pricingHr} />
            <div style={totalRow}>
              <Text style={totalLabel}>Total:</Text>
              <Text style={totalValue}>{formatCurrency(pricing.total)}</Text>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Host Information */}
          <Section style={section}>
            <Text style={sectionTitle}>Your Host</Text>
            <Text style={paragraph}>
              Your host is {hostName}. They will be in touch with you soon with check-in instructions and any additional details.
            </Text>
            <Text style={contactInfo}>Host contact: {hostEmail}</Text>
          </Section>

          {/* Action Buttons */}
          <Section style={buttonSection}>
            <Button
              style={primaryButton}
              href={`https://smartworld.travel/bookings/${bookingId}`}
            >
              View Booking Details
            </Button>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Thank you for choosing SmartWorld Travel. We hope you have a wonderful stay!
            </Text>
            <Text style={footerText}>
              If you have any questions, please contact our support team.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  padding: '32px 24px',
  backgroundColor: '#1e40af',
  textAlign: 'center' as const,
};

const logo = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 8px',
};

const headerText = {
  color: '#ffffff',
  fontSize: '18px',
  margin: '0',
};

const section = {
  padding: '24px',
};

const greeting = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0 0 16px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#4b5563',
  margin: '0 0 16px',
};

const propertySection = {
  padding: '24px',
  textAlign: 'center' as const,
};

const propertyImage = {
  width: '100%',
  maxWidth: '400px',
  height: '200px',
  objectFit: 'cover' as const,
  borderRadius: '8px',
  marginBottom: '16px',
};

const propertyTitle = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0 0 8px',
};

const propertyAddress = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '0',
};

const sectionTitle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0 0 16px',
};

const detailRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '8px',
};

const detailLabel = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '0',
};

const detailValue = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#1f2937',
  margin: '0',
};

const pricingRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '8px',
};

const pricingLabel = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '0',
};

const pricingValue = {
  fontSize: '14px',
  color: '#1f2937',
  margin: '0',
};

const pricingHr = {
  borderColor: '#e5e7eb',
  margin: '16px 0',
};

const totalRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '8px',
};

const totalLabel = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0',
};

const totalValue = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0',
};

const contactInfo = {
  fontSize: '14px',
  color: '#1e40af',
  margin: '8px 0 0',
};

const buttonSection = {
  padding: '24px',
  textAlign: 'center' as const,
};

const primaryButton = {
  backgroundColor: '#1e40af',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
};

const footer = {
  padding: '24px',
  textAlign: 'center' as const,
  backgroundColor: '#f9fafb',
};

const footerText = {
  fontSize: '12px',
  color: '#6b7280',
  margin: '0 0 8px',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};
