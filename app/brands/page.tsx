import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import {
  Verified,
  Star,
  CheckCircle,
} from '@mui/icons-material';

export default function BrandsPage() {
  const brands = [
    {
      name: 'Philips',
      description: 'Leading global healthcare technology company specializing in medical imaging, patient monitoring, and healthcare informatics.',
      specialties: ['Medical Imaging', 'Patient Monitoring', 'Healthcare IT'],
      rating: 5,
    },
    {
      name: 'Mindray',
      description: 'Innovative medical device manufacturer providing patient monitoring, life support, and in-vitro diagnostic solutions.',
      specialties: ['Patient Monitors', 'Life Support', 'Diagnostics'],
      rating: 5,
    },
    {
      name: 'Dr Morepen',
      description: 'Trusted Indian brand offering a wide range of medical devices, diagnostic equipment, and healthcare solutions.',
      specialties: ['Diagnostic Equipment', 'Medical Devices', 'Healthcare Solutions'],
      rating: 4,
    },
    {
      name: 'Medtronic',
      description: 'Global leader in medical technology, services, and solutions improving the lives of people worldwide.',
      specialties: ['Cardiac Devices', 'Surgical Equipment', 'Medical Technology'],
      rating: 5,
    },
    {
      name: 'Siemens',
      description: 'Pioneering healthcare solutions including medical imaging, laboratory diagnostics, and healthcare IT systems.',
      specialties: ['Medical Imaging', 'Lab Diagnostics', 'Healthcare IT'],
      rating: 5,
    },
    {
      name: 'Omron',
      description: 'Renowned manufacturer of medical devices, home healthcare products, and blood pressure monitoring equipment.',
      specialties: ['Blood Pressure Monitors', 'Home Healthcare', 'Medical Devices'],
      rating: 4,
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
            Our Brands
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
            Trusted partnerships with leading medical equipment manufacturers worldwide
          </Typography>
        </Container>
      </Box>

      {/* Brands Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {brands.map((brand, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  border: '2px solid rgba(25, 118, 210, 0.1)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 3,
                    backgroundColor: 'rgba(25, 118, 210, 0.05)',
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: 2,
                      backgroundColor: '#1976d2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.5rem',
                    }}
                  >
                    {brand.name.charAt(0)}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    {[...Array(brand.rating)].map((_, i) => (
                      <Star key={i} sx={{ fontSize: 20, color: '#ffc107' }} />
                    ))}
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#1976d2' }}>
                      {brand.name}
                    </Typography>
                    <Verified sx={{ fontSize: 20, color: '#1976d2' }} />
                  </Box>
                  <Typography variant="body2" sx={{ mb: 2, color: '#000000' }}>
                    {brand.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {brand.specialties.map((specialty, idx) => (
                      <Chip
                        key={idx}
                        label={specialty}
                        size="small"
                        icon={<CheckCircle sx={{ fontSize: 16 }} />}
                        sx={{
                          backgroundColor: 'rgba(25, 118, 210, 0.1)',
                          color: '#1976d2',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                      },
                    }}
                  >
                    View Products
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Partnership Section */}
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
            Why Partner With Us?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Verified sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                  Authorized Dealers
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  Official authorized dealers for all major brands with genuine products
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <CheckCircle sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                  Quality Assurance
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  All products come with manufacturer warranty and quality certifications
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Star sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                  Best Prices
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  Competitive pricing with flexible payment options and bulk discounts
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

