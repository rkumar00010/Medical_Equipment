import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
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
  LocalHospital,
  Healing,
  Science,
  Assignment,
  Groups,
} from '@mui/icons-material';

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Hospitals',
      icon: <LocalHospital sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Complete medical equipment solutions for multi-specialty hospitals, including ICU, operation theaters, and general wards.',
      solutions: [
        'ICU Equipment',
        'Operation Theater Setup',
        'Diagnostic Equipment',
        'Hospital Furniture',
        'Emergency Equipment',
        'Maintenance Services',
      ],
      color: '#1976d2',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    },
    {
      title: 'Clinics',
      icon: <Healing sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Essential medical equipment and supplies for private clinics and small healthcare facilities.',
      solutions: [
        'Examination Equipment',
        'Basic Diagnostic Tools',
        'Clinic Furniture',
        'Medical Supplies',
        'Small Equipment',
        'Consultation Setup',
      ],
      color: '#1976d2',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    },
    {
      title: 'Diagnostic Labs',
      icon: <Science sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Specialized laboratory equipment and diagnostic tools for accurate testing and analysis.',
      solutions: [
        'Lab Analyzers',
        'Microscopes',
        'Centrifuges',
        'Blood Testing Equipment',
        'Pathology Equipment',
        'Lab Consumables',
      ],
      color: '#1976d2',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    },
    {
      title: 'Govt Tenders',
      icon: <Assignment sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Bulk supply solutions for government hospitals and healthcare projects with competitive pricing.',
      solutions: [
        'Bulk Supply',
        'Tender Participation',
        'Government Compliance',
        'Project Management',
        'Timely Delivery',
        'Quality Assurance',
      ],
      color: '#1976d2',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80',
    },
    {
      title: 'NGOs & Healthcare Orgs',
      icon: <Groups sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Affordable healthcare solutions for NGOs and non-profit healthcare organizations.',
      solutions: [
        'Cost-Effective Solutions',
        'Community Health Equipment',
        'Mobile Clinic Setup',
        'Rural Healthcare Support',
        'Special Discounts',
        'Flexible Payment',
      ],
      color: '#1976d2',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
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
            Industries We Serve
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
            Tailored solutions for diverse healthcare sectors
          </Typography>
        </Container>
      </Box>

      {/* Industries Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {industries.map((industry, index) => (
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
                    height: 220,
                    width: '100%',
                  }}
                >
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: 2,
                      p: 1.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    {industry.icon}
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1976d2' }}>
                    {industry.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: '#000000' }}>
                    {industry.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {industry.solutions.map((solution, idx) => (
                      <Chip
                        key={idx}
                        label={solution}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(25, 118, 210, 0.1)',
                          color: '#1976d2',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#1976d2',
                      '&:hover': {
                        backgroundColor: '#1565c0',
                      },
                    }}
                  >
                    Explore Solutions
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ backgroundColor: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#1976d2', mb: 1 }}>
                  500+
                </Typography>
                <Typography variant="body1" sx={{ color: '#000000' }}>
                  Hospitals Served
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#1976d2', mb: 1 }}>
                  1000+
                </Typography>
                <Typography variant="body1" sx={{ color: '#000000' }}>
                  Clinics & Labs
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#1976d2', mb: 1 }}>
                  50+
                </Typography>
                <Typography variant="body1" sx={{ color: '#000000' }}>
                  Product Categories
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#1976d2', mb: 1 }}>
                  15+
                </Typography>
                <Typography variant="body1" sx={{ color: '#000000' }}>
                  Years Experience
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

