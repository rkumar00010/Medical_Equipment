import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
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
  Science,
  LocalHospital,
  Healing,
  LocalHospitalOutlined,
  VerifiedUser,
  Biotech,
} from '@mui/icons-material';

export default function ProductsPage() {
  const productCategories = [
    {
      title: 'Diagnostic Equipment',
      slug: 'diagnostic-equipment',
      icon: <Science sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Advanced diagnostic tools including X-ray machines, ultrasound scanners, ECG machines, and blood analyzers.',
      items: ['X-Ray Machines', 'Ultrasound Scanners', 'ECG Machines', 'Blood Analyzers', 'CT Scanners', 'MRI Equipment'],
      image: '🔬',
    },
    {
      title: 'Hospital Furniture',
      slug: 'hospital-furniture',
      icon: <LocalHospital sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Premium quality hospital beds, patient trolleys, operation tables, and medical furniture.',
      items: ['Hospital Beds', 'Patient Trolleys', 'Operation Tables', 'ICU Beds', 'Stretchers', 'Medical Cabinets'],
      image: '🏥',
    },
    {
      title: 'Surgical Instruments',
      slug: 'surgical-instruments',
      icon: <Healing sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Precision surgical instruments and tools for various medical procedures.',
      items: ['Surgical Scissors', 'Forceps', 'Scalpels', 'Retractors', 'Surgical Sets', 'Laparoscopic Instruments'],
      image: '⚕️',
    },
    {
      title: 'Laboratory Equipment',
      slug: 'laboratory-equipment',
      icon: <Biotech sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Complete range of laboratory equipment for accurate testing and analysis.',
      items: ['Microscopes', 'Centrifuges', 'Incubators', 'Autoclaves', 'Lab Analyzers', 'Refrigerators'],
      image: '🧪',
    },
    {
      title: 'ICU & Emergency',
      slug: 'icu-emergency',
      icon: <LocalHospitalOutlined sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Critical care equipment including ventilators, monitors, defibrillators, and emergency supplies.',
      items: ['Ventilators', 'Patient Monitors', 'Defibrillators', 'Infusion Pumps', 'Syringe Pumps', 'Emergency Carts'],
      image: '🚨',
    },
    {
      title: 'PPE & Safety',
      slug: 'ppe-safety',
      icon: <VerifiedUser sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Personal protective equipment and safety supplies for healthcare professionals.',
      items: ['Face Masks', 'Gloves', 'Gowns', 'Face Shields', 'Sanitizers', 'Safety Kits'],
      image: '🛡️',
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
            Our Products
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
            Comprehensive range of medical equipment and supplies for hospitals, clinics, and healthcare facilities
          </Typography>
        </Container>
      </Box>

      {/* Product Categories */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {productCategories.map((category, index) => (
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
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 250,
                    width: '100%',
                    backgroundColor: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(21, 101, 192, 0.1) 100%)',
                    background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.08) 0%, rgba(21, 101, 192, 0.08) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: 2,
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    }}
                  >
                    {category.icon}
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1976d2' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, color: '#000000' }}>
                    {category.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {category.items.slice(0, 4).map((item, idx) => (
                      <Chip
                        key={idx}
                        label={item}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(25, 118, 210, 0.1)',
                          color: '#1976d2',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                  <Link href={`/products/${category.slug}`} style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 2,
                        backgroundColor: '#1976d2',
                        '&:hover': {
                          backgroundColor: '#1565c0',
                        },
                      }}
                    >
                      View All Products
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
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
            Why Choose Our Products?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                  ✓ Certified Quality
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  All products meet international quality standards and certifications
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                  ✓ Competitive Pricing
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  Best prices in the market with flexible payment options
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center', p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                  ✓ Fast Delivery
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  Quick delivery across India with reliable logistics partners
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

