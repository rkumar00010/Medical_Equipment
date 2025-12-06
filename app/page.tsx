import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
  Grid,
  Button,
} from '@mui/material';
import {
  LocalHospital,
  Science,
  Healing,
  VerifiedUser,
  SupportAgent,
  WorkspacePremium,
  Star,
  FormatQuote,
} from '@mui/icons-material';


export default function Home() {
  const categories = [
    {
      title: 'Diagnostic Equipment',
      icon: <Science sx={{ fontSize: 50, color: '#1976d2' }} />,
      description: 'Advanced diagnostic tools and imaging equipment',
    },
    {
      title: 'Hospital Furniture',
      icon: <LocalHospital sx={{ fontSize: 50, color: '#1976d2' }} />,
      description: 'Premium quality hospital beds and furniture',
    },
    {
      title: 'Surgical Instruments',
      icon: <Healing sx={{ fontSize: 50, color: '#1976d2' }} />,
      description: 'Precision surgical tools and equipment',
    },
    {
      title: 'ICU & Emergency',
      icon: <LocalHospital sx={{ fontSize: 50, color: '#1976d2' }} />,
      description: 'Critical care and emergency medical equipment',
    },
  ];

  const features = [
    {
      title: 'Certified Quality',
      icon: <VerifiedUser sx={{ fontSize: 40, color: '#1976d2' }} />,
      description: 'All products meet international quality standards',
    },
    {
      title: '24/7 Support',
      icon: <SupportAgent sx={{ fontSize: 40, color: '#1976d2' }} />,
      description: 'Round-the-clock customer support and assistance',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '70vh', md: '85vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          mt: 0,
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            '& img': {
              filter: 'brightness(1.1) contrast(1.05)',
            },
          }}
        >
        <Image
            src="/medical.jpg"
            alt="Surgical Instruments and Medical Supplies"
            fill
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center center',
            }}
            priority
            quality={95}
            sizes="100vw"
            unoptimized={false}
          />
        </Box>
        
        {/* Gradient Overlay for Text Readability - Lighter for better image visibility */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.02) 100%)',
            zIndex: 1,
          }}
        />
        
        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: { xs: 10, md: 15 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  mb: 2,
                  display: 'inline-block',
                  px: 2,
                  py: 0.5,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: 2,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}
                >
                  Trusted Medical Equipment Supplier
                </Typography>
              </Box>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.8rem', md: '4.5rem' },
                  color: 'white',
                  textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Premium Medical Equipment Supply
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 5,
                  color: 'white',
                  fontSize: { xs: '1.1rem', md: '1.4rem' },
                  textShadow: '1px 1px 5px rgba(0,0,0,0.5)',
                  lineHeight: 1.7,
                  maxWidth: '90%',
                  opacity: 0.95,
                }}
              >
                Trusted by hospitals, clinics, and healthcare organizations nationwide.
                Your one-stop solution for all medical equipment needs.
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'center', mb: 4 }}>
                <Link href="/products" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: 'white',
                      color: '#1976d2',
                      px: 6,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      borderRadius: 3,
                      boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#f0f0f0',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Explore Products
                  </Button>
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      borderWidth: 2.5,
                      color: 'white',
                      px: 6,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      borderRadius: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(15px)',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 8px 24px rgba(255,255,255,0.2)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Contact Us
                  </Button>
                </Link>
              </Box>
              
              {/* Trust Badges */}
              <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', alignItems: 'center', mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <VerifiedUser sx={{ color: 'white', fontSize: 24 }} />
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                    ISO Certified
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <VerifiedUser sx={{ color: 'white', fontSize: 24 }} />
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                    FDA Approved
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <VerifiedUser sx={{ color: 'white', fontSize: 24 }} />
                  <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                    15+ Years Experience
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Categories Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            mb: 6,
            color: '#1976d2',
          }}
        >
          Key Categories
        </Typography>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  border: '2px solid rgba(25, 118, 210, 0.1)',
                  backgroundColor: 'white',
                }}
              >
                <Box sx={{ mb: 2 }}>{category.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                  {category.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000000' }}>
                  {category.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 6,
              color: '#1976d2',
            }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    height: '100%',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Quality Certificates Section */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 6,
              color: '#1976d2',
            }}
          >
            Quality Certifications
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {[
              { name: 'ISO 9001:2015', desc: 'Quality Management System' },
              { name: 'CE Marking', desc: 'European Conformity' },
              { name: 'FDA Approved', desc: 'US Food & Drug Administration' },
              { name: 'GMP Certified', desc: 'Good Manufacturing Practice' },
            ].map((cert, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    border: '2px solid rgba(25, 118, 210, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 4,
                      borderColor: '#1976d2',
                    },
                  }}
                >
                  <WorkspacePremium sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1976d2' }}>
                    {cert.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#000000' }}>
                    {cert.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 6,
              color: '#1976d2',
            }}
          >
            What Our Clients Say
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: 'Dr. Rajesh Kumar',
                role: 'Chief Medical Officer',
                hospital: 'City Hospital',
                text: 'Excellent service and quality products. They have been our trusted partner for medical equipment supply for over 5 years.',
                rating: 5,
              },
              {
                name: 'Dr. Priya Sharma',
                role: 'Hospital Administrator',
                hospital: 'Metro Healthcare',
                text: 'Professional team with deep knowledge of medical equipment. Their installation and maintenance services are top-notch.',
                rating: 5,
              },
              {
                name: 'Dr. Amit Patel',
                role: 'Director',
                hospital: 'Regional Medical Center',
                text: 'Best pricing in the market with genuine products. Highly recommend for all medical equipment needs.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 3,
                    backgroundColor: 'white',
                    border: '2px solid rgba(25, 118, 210, 0.1)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <FormatQuote sx={{ fontSize: 40, color: '#1976d2', mb: 2, opacity: 0.3 }} />
                  <Typography variant="body1" sx={{ mb: 3, color: '#000000', fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ fontSize: 20, color: '#ffc107' }} />
                    ))}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {testimonial.role}, {testimonial.hospital}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          backgroundColor: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              { number: '500+', label: 'Hospitals Served' },
              { number: '1000+', label: 'Clinics & Labs' },
              { number: '50+', label: 'Product Categories' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    height: '100%',
                    backgroundColor: 'white',
                    border: '2px solid rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 4,
                      borderColor: '#1976d2',
                    },
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      color: '#000000',
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#000000', fontWeight: 600 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: 6,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Contact us today for a consultation and discover how we can help meet your medical equipment needs.
          </Typography>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: '#1976d2',
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              Get in Touch
            </Button>
          </Link>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
