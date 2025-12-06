import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import {
  Visibility,
  Flag,
  VerifiedUser,
  Star,
  Groups,
  LocationOn,
} from '@mui/icons-material';

export default function AboutPage() {
  const values = [
    {
      title: 'Our Vision',
      icon: <Visibility sx={{ fontSize: 50, color: '#1976d2' }} />,
      description: 'To be India\'s most trusted and reliable medical equipment supplier, making quality healthcare accessible to all.',
    },
    {
      title: 'Our Mission',
      icon: <Flag sx={{ fontSize: 50, color: '#1976d2' }} />,
      description: 'To provide comprehensive, high-quality medical equipment solutions with exceptional service and support.',
    },
    {
      title: 'Quality Standards',
      icon: <VerifiedUser sx={{ fontSize: 50, color: '#1976d2' }} />,
      description: 'All our products meet international quality standards and certifications including ISO, CE, and FDA approvals.',
    },
  ];

  const whyChooseUs = [
    {
      title: '15+ Years Experience',
      description: 'Extensive experience in the medical equipment industry',
    },
    {
      title: '500+ Hospitals Served',
      description: 'Trusted by leading healthcare institutions across India',
    },
    {
      title: '50+ Product Categories',
      description: 'Comprehensive range of medical equipment and supplies',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support and technical assistance',
    },
    {
      title: 'Authorized Dealers',
      description: 'Official partnerships with leading medical equipment brands',
    },
    {
      title: 'Competitive Pricing',
      description: 'Best prices with flexible payment options',
    },
  ];

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
            About Us
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
            Leading medical equipment supplier committed to quality healthcare solutions
          </Typography>
        </Container>
      </Box>

      {/* Company Story */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#1976d2' }}>
              Our Story
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#000000' }}>
              Established over 15 years ago, we have been at the forefront of providing quality medical
              equipment and healthcare solutions across India. Our journey began with a simple mission:
              to make quality healthcare accessible to everyone.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#000000' }}>
              Today, we are proud to serve hundreds of hospitals, clinics, diagnostic labs, and healthcare
              organizations nationwide. Our commitment to excellence, customer satisfaction, and innovation
              has made us a trusted partner in the healthcare industry.
            </Typography>
            <Typography variant="body1" sx={{ color: '#000000' }}>
              We work with leading international and domestic brands to ensure our customers have access
              to the latest medical technology and equipment at competitive prices.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 4,
              }}
            >
              <Groups sx={{ fontSize: 200, color: '#1976d2', opacity: 0.3 }} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Vision, Mission, Quality */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    border: '2px solid rgba(25, 118, 210, 0.1)',
                  }}
                >
                  <Box sx={{ mb: 2 }}>{value.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1976d2' }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#000000' }}>
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 6,
            color: '#1976d2',
          }}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={3}>
          {whyChooseUs.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid rgba(25, 118, 210, 0.1)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <Star sx={{ fontSize: 20, color: '#1976d2' }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Certifications */}
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
            Certifications & Standards
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <VerifiedUser sx={{ fontSize: 50, color: '#1976d2', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
                  ISO Certified
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <VerifiedUser sx={{ fontSize: 50, color: '#1976d2', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
                  CE Marked
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <VerifiedUser sx={{ fontSize: 50, color: '#1976d2', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
                  FDA Approved
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 3, textAlign: 'center' }}>
                <VerifiedUser sx={{ fontSize: 50, color: '#1976d2', mb: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#000000' }}>
                  Authorized Dealers
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

