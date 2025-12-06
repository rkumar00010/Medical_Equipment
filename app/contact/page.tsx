import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Send,
} from '@mui/icons-material';

export default function ContactPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              textAlign: 'center',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              opacity: 0.9,
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            Get in touch with us for any queries, quotes, or support
          </Typography>
        </Container>
      </Box>

      {/* Contact Information & Form */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#1976d2' }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#000000' }}>
              We're here to help! Reach out to us through any of the following channels.
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ border: '2px solid rgba(25, 118, 210, 0.1)' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <Phone sx={{ fontSize: 30, color: '#1976d2', mt: 0.5 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                          Phone
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          +91-1234567890
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          +91-9876543210
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={{ border: '2px solid rgba(25, 118, 210, 0.1)' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <Email sx={{ fontSize: 30, color: '#1976d2', mt: 0.5 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                          Email
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          info@medicalequipment.com
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          support@medicalequipment.com
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={{ border: '2px solid rgba(25, 118, 210, 0.1)' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <LocationOn sx={{ fontSize: 30, color: '#1976d2', mt: 0.5 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                          Address
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          123 Medical Equipment Street,
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          Healthcare District, City - 123456,
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          India
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card sx={{ border: '2px solid rgba(25, 118, 210, 0.1)' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                      <AccessTime sx={{ fontSize: 30, color: '#1976d2', mt: 0.5 }} />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                          Business Hours
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          Monday - Friday: 9:00 AM - 6:00 PM
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          Saturday: 10:00 AM - 4:00 PM
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#000000' }}>
                          Sunday: Closed
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontWeight: 600 }}>
                          24/7 Emergency Support Available
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4, border: '2px solid rgba(25, 118, 210, 0.1)' }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1976d2' }}>
                Send us a Message
              </Typography>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      multiline
                      rows={6}
                      variant="outlined"
                      required
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  startIcon={<Send />}
                  sx={{
                    backgroundColor: '#1976d2',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: '#1565c0',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section Placeholder */}
      <Box sx={{ backgroundColor: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 4,
              color: '#1976d2',
            }}
          >
            Find Us
          </Typography>
          <Box
            sx={{
              height: 400,
              backgroundColor: '#e0e0e0',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <LocationOn sx={{ fontSize: 80, color: '#1976d2', mb: 2 }} />
              <Typography variant="h6" color="text.secondary">
                Map Location
              </Typography>
              <Typography variant="body2" color="text.secondary">
                (Map integration can be added here)
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

