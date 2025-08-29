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

interface OperationsNotificationEmailProps {
  bookingId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  listingTitle: string;
  listingImage: string;
  listingAddress: string;
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
  hostPhone?: string;
  specialRequests?: string;
  createdAt: string;
}

export default function OperationsNotificationEmail({
  bookingId,
  guestName,
  guestEmail,
  guestPhone,
  listingTitle,
  listingImage,
  listingAddress,
  checkIn,
  checkOut,
  guests,
  pricing,
  hostName,
  hostEmail,
  hostPhone,
  specialRequests,
  createdAt,
}: OperationsNotificationEmailProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const nights = Math.ceil(
    (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logo}>SmartWorld Travel</Text>
            <Text style={headerText}>🚨 New Booking Alert</Text>
            <Text style={urgentText}>Operations Team - Action Required</Text>
          </Section>

          {/* Booking Summary */}
          <Section style={summarySection}>
            <Text style={sectionTitle}>Booking Summary</Text>
            <div style={summaryGrid}>
              <div style={summaryCard}>
                <Text style={summaryLabel}>Booking ID</Text>
                <Text style={summaryValue}>{bookingId}</Text>
              </div>
              <div style={summaryCard}>
                <Text style={summaryLabel}>Total Revenue</Text>
                <Text style={summaryValueHighlight}>{formatCurrency(pricing.total)}</Text>
              </div>
              <div style={summaryCard}>
                <Text style={summaryLabel}>Nights</Text>
                <Text style={summaryValue}>{nights}</Text>
              </div>
              <div style={summaryCard}>
                <Text style={summaryLabel}>Guests</Text>
                <Text style={summaryValue}>{guests.adults + guests.children + guests.infants}</Text>
              </div>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Property Details */}
          <Section style={section}>
            <Text style={sectionTitle}>Property Details</Text>
            <img
              src={listingImage}
              alt={listingTitle}
              style={propertyImage}
            />
            <Text style={propertyTitle}>{listingTitle}</Text>
            <Text style={propertyAddress}>{listingAddress}</Text>
          </Section>

          <Hr style={hr} />

          {/* Guest Information */}
          <Section style={section}>
            <Text style={sectionTitle}>Guest Information</Text>
            <div style={contactCard}>
              <div style={contactRow}>
                <Text style={contactLabel}>Name:</Text>
                <Text style={contactValue}>{guestName}</Text>
              </div>
              <div style={contactRow}>
                <Text style={contactLabel}>Email:</Text>
                <Text style={contactValue}>{guestEmail}</Text>
              </div>
              <div style={contactRow}>
                <Text style={contactLabel}>Phone:</Text>
                <Text style={contactValue}>{guestPhone}</Text>
              </div>
              <div style={contactRow}>
                <Text style={contactLabel}>Guest Count:</Text>
                <Text style={contactValue}>
                  {guests.adults} adults
                  {guests.children > 0 && `, ${guests.children} children`}
                  {guests.infants > 0 && `, ${guests.infants} infants`}
                </Text>
              </div>
            </div>
          </Section>

          <Hr style={hr} />

          {/* Stay Details */}
          <Section style={section}>
            <Text style={sectionTitle}>Stay Details</Text>
            <div style={stayDetails}>
              <div style={dateCard}>
                <Text style={dateLabel}>Check-in</Text>
                <Text style={dateValue}>{formatDate(checkIn)}</Text>
              </div>
              <div style={dateCard}>
                <Text style={dateLabel}>Check-out</Text>
                <Text style={dateValue}>{formatDate(checkOut)}</Text>
              </div>
            </div>
            <Text style={bookingTime}>
              Booked: {formatDateTime(createdAt)}
            </Text>
          </Section>

          <Hr style={hr} />

          {/* Host Information */}
          <Section style={section}>
            <Text style={sectionTitle}>Host Information</Text>
            <div style={hostCard}>
              <div style={contactRow}>
                <Text style={contactLabel}>Host Name:</Text>
                <Text style={contactValue}>{hostName}</Text>
              </div>
              <div style={contactRow}>
                <Text style={contactLabel}>Host Email:</Text>
                <Text style={contactValue}>{hostEmail}</Text>
              </div>
              {hostPhone && (
                <div style={contactRow}>
                  <Text style={contactLabel}>Host Phone:</Text>
                  <Text style={contactValue}>{hostPhone}</Text>
                </div>
              )}
            </div>
          </Section>

          <Hr style={hr} />

          {/* Pricing Breakdown */}
          <Section style={section}>
            <Text style={sectionTitle}>Revenue Breakdown</Text>
            <div style={pricingCard}>
              <div style={pricingRow}>
                <Text style={pricingLabel}>Subtotal ({nights} nights):</Text>
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
                <Text style={totalLabel}>Total Revenue:</Text>
                <Text style={totalValue}>{formatCurrency(pricing.total)}</Text>
              </div>
            </div>
          </Section>

          {/* Special Requests */}
          {specialRequests && (
            <>
              <Hr style={hr} />
              <Section style={section}>
                <Text style={sectionTitle}>Special Requests</Text>
                <div style={requestsCard}>
                  <Text style={requestsText}>{specialRequests}</Text>
                </div>
              </Section>
            </>
          )}

          {/* Action Items */}
          <Section style={actionSection}>
            <Text style={sectionTitle}>Required Actions</Text>
            <div style={actionList}>
              <Text style={actionItem}>✅ Verify booking details and guest information</Text>
              <Text style={actionItem}>✅ Confirm property availability and prepare for guest</Text>
              <Text style={actionItem}>✅ Send check-in instructions to guest 24h before arrival</Text>
              <Text style={actionItem}>✅ Notify host about confirmed booking</Text>
              <Text style={actionItem}>✅ Schedule cleaning and preparation</Text>
            </div>
          </Section>

          {/* Action Buttons */}
          <Section style={buttonSection}>
            <Button
              style={primaryButton}
              href={`https://admin.smartworld.travel/bookings/${bookingId}`}
            >
              View in Admin Panel
            </Button>
            <Button
              style={secondaryButton}
              href={`mailto:${guestEmail}?subject=Welcome to SmartWorld Travel - Booking ${bookingId}`}
            >
              Contact Guest
            </Button>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              SmartWorld Travel Operations Team
            </Text>
            <Text style={footerText}>
              This is an automated notification. Please process this booking promptly.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f3f4f6',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '700px',
};

const header = {
  padding: '32px 24px',
  backgroundColor: '#dc2626',
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
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 8px',
};

const urgentText = {
  color: '#fef2f2',
  fontSize: '14px',
  margin: '0',
};

const section = {
  padding: '24px',
};

const summarySection = {
  padding: '24px',
  backgroundColor: '#f8fafc',
};

const sectionTitle = {
  fontSize: '18px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0 0 16px',
};

const summaryGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px',
};

const summaryCard = {
  backgroundColor: '#ffffff',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
};

const summaryLabel = {
  fontSize: '12px',
  color: '#6b7280',
  margin: '0 0 4px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
};

const summaryValue = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0',
};

const summaryValueHighlight = {
  fontSize: '20px',
  fontWeight: '600',
  color: '#059669',
  margin: '0',
};

const propertyImage = {
  width: '100%',
  maxWidth: '500px',
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

const contactCard = {
  backgroundColor: '#f9fafb',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
};

const contactRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '8px',
};

const contactLabel = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#374151',
  margin: '0',
};

const contactValue = {
  fontSize: '14px',
  color: '#1f2937',
  margin: '0',
};

const stayDetails = {
  display: 'flex',
  gap: '16px',
  marginBottom: '16px',
};

const dateCard = {
  flex: 1,
  backgroundColor: '#f9fafb',
  padding: '16px',
  borderRadius: '8px',
  textAlign: 'center' as const,
};

const dateLabel = {
  fontSize: '12px',
  color: '#6b7280',
  margin: '0 0 4px',
  textTransform: 'uppercase' as const,
};

const dateValue = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#1f2937',
  margin: '0',
};

const bookingTime = {
  fontSize: '12px',
  color: '#6b7280',
  fontStyle: 'italic',
  margin: '0',
};

const hostCard = {
  backgroundColor: '#eff6ff',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #dbeafe',
};

const pricingCard = {
  backgroundColor: '#f0fdf4',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #bbf7d0',
};

const pricingRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '8px',
};

const pricingLabel = {
  fontSize: '14px',
  color: '#374151',
  margin: '0',
};

const pricingValue = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#1f2937',
  margin: '0',
};

const pricingHr = {
  borderColor: '#bbf7d0',
  margin: '12px 0',
};

const totalRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '8px',
};

const totalLabel = {
  fontSize: '16px',
  fontWeight: '600',
  color: '#059669',
  margin: '0',
};

const totalValue = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#059669',
  margin: '0',
};

const requestsCard = {
  backgroundColor: '#fef3c7',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #fcd34d',
};

const requestsText = {
  fontSize: '14px',
  color: '#92400e',
  margin: '0',
  fontStyle: 'italic',
};

const actionSection = {
  padding: '24px',
  backgroundColor: '#fefefe',
  border: '2px solid #e5e7eb',
  borderRadius: '8px',
  margin: '24px',
};

const actionList = {
  marginLeft: '16px',
};

const actionItem = {
  fontSize: '14px',
  color: '#374151',
  margin: '0 0 8px',
  lineHeight: '1.5',
};

const buttonSection = {
  padding: '24px',
  textAlign: 'center' as const,
};

const primaryButton = {
  backgroundColor: '#dc2626',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '0 8px 8px',
};

const secondaryButton = {
  backgroundColor: '#1f2937',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '0 8px 8px',
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
