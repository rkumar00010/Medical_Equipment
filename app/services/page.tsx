import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  LocalShipping,
  Build,
  Settings,
  Assignment,
  SupportAgent,
  CheckCircle,
} from '@mui/icons-material';

export default function ServicesPage() {
  const services = [
    {
      title: 'Medical Equipment Supply',
      icon: <LocalShipping sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Complete range of medical equipment supply for hospitals, clinics, and healthcare facilities.',
      features: [
        'Wide product range',
        'Competitive pricing',
        'Fast delivery',
        'Quality assurance',
        'After-sales support',
      ],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80',
    },
    {
      title: 'Hospital/Clinic Setup',
      icon: <Build sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'End-to-end hospital and clinic setup services from planning to execution.',
      features: [
        'Space planning',
        'Equipment selection',
        'Installation services',
        'Layout optimization',
        'Complete setup solutions',
      ],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    },
    {
      title: 'Installation & Maintenance',
      icon: <Settings sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Professional installation and regular maintenance services for all medical equipment.',
      features: [
        'Expert installation',
        'Regular maintenance',
        'Preventive care',
        'Technical support',
        '24/7 assistance',
      ],
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    },
    {
      title: 'Equipment Repair & Calibration',
      icon: <Build sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Comprehensive repair and calibration services to keep your equipment running smoothly.',
      features: [
        'Expert technicians',
        'Genuine parts',
        'Accurate calibration',
        'Quick turnaround',
        'Warranty on repairs',
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    },
    {
      title: 'Annual Maintenance Contract (AMC)',
      icon: <Assignment sx={{ fontSize: 60, color: '#1976d2' }} />,
      description: 'Cost-effective annual maintenance contracts for hassle-free equipment management.',
      features: [
        'Regular inspections',
        'Preventive maintenance',
        'Priority support',
        'Cost savings',
        'Extended equipment life',
      ],
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
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
            Our Services
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
            Comprehensive healthcare solutions and support services
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
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
                    src={service.image}
                    alt={service.title}
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
                    {service.icon}
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1976d2' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 3, color: '#000000' }}>
                    {service.description}
                  </Typography>
                  <List dense>
                    {service.features.map((feature, idx) => (
                      <ListItem key={idx} disablePadding>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircle sx={{ fontSize: 20, color: '#1976d2' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            variant: 'body2',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Link href="/contact" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 3,
                        backgroundColor: '#1976d2',
                        '&:hover': {
                          backgroundColor: '#1565c0',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Support Section */}
      <Box sx={{ backgroundColor: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <SupportAgent sx={{ fontSize: 120, color: '#1976d2', opacity: 0.3 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1976d2' }}>
                24/7 Customer Support
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#000000' }}>
                Our dedicated support team is available round the clock to assist you with any queries,
                technical issues, or service requests. We ensure prompt response and quick resolution
                to keep your operations running smoothly.
              </Typography>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#1976d2',
                    px: 4,
                    '&:hover': {
                      backgroundColor: '#1565c0',
                    },
                  }}
                >
                  Contact Support
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

