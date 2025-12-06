import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
  Breadcrumbs,
} from '@mui/material';
import Link from 'next/link';
import {
  Science,
  LocalHospital,
  Healing,
  LocalHospitalOutlined,
  VerifiedUser,
  Biotech,
  Home,
} from '@mui/icons-material';

const productData: Record<string, {
  title: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
  image: string;
  features: string[];
  applications: string[];
}> = {
  'diagnostic-equipment': {
    title: 'Diagnostic Equipment',
    icon: <Science sx={{ fontSize: 60, color: '#1976d2' }} />,
    description: 'Advanced diagnostic tools including X-ray machines, ultrasound scanners, ECG machines, and blood analyzers for accurate medical diagnosis.',
    items: ['X-Ray Machines', 'Ultrasound Scanners', 'ECG Machines', 'Blood Analyzers', 'CT Scanners', 'MRI Equipment', 'Digital X-Ray Systems', 'Portable Ultrasound'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    features: [
      'High-resolution imaging',
      'Digital technology',
      'Portable options available',
      'FDA approved',
      'Easy to operate',
      'Maintenance support',
    ],
    applications: [
      'Hospitals',
      'Diagnostic Centers',
      'Clinics',
      'Emergency Care',
      'Radiology Departments',
    ],
  },
  'hospital-furniture': {
    title: 'Hospital Furniture',
    icon: <LocalHospital sx={{ fontSize: 60, color: '#1976d2' }} />,
    description: 'Premium quality hospital beds, patient trolleys, operation tables, and medical furniture designed for comfort and durability.',
    items: ['Hospital Beds', 'Patient Trolleys', 'Operation Tables', 'ICU Beds', 'Stretchers', 'Medical Cabinets', 'Examination Tables', 'Wheelchairs'],
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80',
    features: [
      'Ergonomic design',
      'Durable construction',
      'Easy to clean',
      'Adjustable features',
      'Safety certified',
      'Comfortable for patients',
    ],
    applications: [
      'General Wards',
      'ICU',
      'Operation Theaters',
      'Emergency Rooms',
      'Outpatient Departments',
    ],
  },
  'surgical-instruments': {
    title: 'Surgical Instruments',
    icon: <Healing sx={{ fontSize: 60, color: '#1976d2' }} />,
    description: 'Precision surgical instruments and tools for various medical procedures including laparoscopic and general surgery.',
    items: ['Surgical Scissors', 'Forceps', 'Scalpels', 'Retractors', 'Surgical Sets', 'Laparoscopic Instruments', 'Electrosurgical Units', 'Surgical Lasers'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    features: [
      'Surgical grade stainless steel',
      'Sterilizable',
      'Precision crafted',
      'CE certified',
      'Complete sets available',
      'Professional quality',
    ],
    applications: [
      'Operation Theaters',
      'Surgical Centers',
      'Day Care Surgeries',
      'Emergency Surgeries',
      'Specialized Procedures',
    ],
  },
  'laboratory-equipment': {
    title: 'Laboratory Equipment',
    icon: <Biotech sx={{ fontSize: 60, color: '#1976d2' }} />,
    description: 'Complete range of laboratory equipment for accurate testing and analysis including microscopes, centrifuges, and analyzers.',
    items: ['Microscopes', 'Centrifuges', 'Incubators', 'Autoclaves', 'Lab Analyzers', 'Refrigerators', 'Blood Bank Equipment', 'Pathology Equipment'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    features: [
      'Accurate results',
      'Automated systems',
      'Temperature controlled',
      'ISO certified',
      'Easy maintenance',
      'Comprehensive support',
    ],
    applications: [
      'Pathology Labs',
      'Blood Banks',
      'Research Labs',
      'Diagnostic Centers',
      'Hospital Labs',
    ],
  },
  'icu-emergency': {
    title: 'ICU & Emergency',
    icon: <LocalHospitalOutlined sx={{ fontSize: 60, color: '#1976d2' }} />,
    description: 'Critical care and emergency medical equipment including ventilators, patient monitors, and life support systems.',
    items: ['Ventilators', 'Patient Monitors', 'Infusion Pumps', 'Defibrillators', 'ICU Beds', 'Pulse Oximeters', 'Nebulizers', 'Emergency Carts'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    features: [
      'Life-saving technology',
      '24/7 monitoring',
      'Portable options',
      'FDA approved',
      'Easy to use',
      'Reliable performance',
    ],
    applications: [
      'Intensive Care Units',
      'Emergency Departments',
      'Ambulances',
      'Trauma Centers',
      'Critical Care',
    ],
  },
  'ppe-safety': {
    title: 'PPE & Safety',
    icon: <VerifiedUser sx={{ fontSize: 60, color: '#1976d2' }} />,
    description: 'Personal protective equipment and safety supplies for healthcare professionals including masks, gloves, and protective gear.',
    items: ['Face Masks', 'Gloves', 'Gowns', 'Face Shields', 'Sanitizers', 'Safety Kits', 'Protective Suits', 'Disposable Items'],
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80',
    features: [
      'High quality materials',
      'Comfortable fit',
      'Disposable options',
      'Reusable options',
      'Certified standards',
      'Bulk availability',
    ],
    applications: [
      'Hospitals',
      'Clinics',
      'Laboratories',
      'Emergency Response',
      'Healthcare Facilities',
    ],
  },
};

export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  const category = params.category;
  const data = productData[category];

  if (!data) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h3" sx={{ mb: 2, color: '#1976d2' }}>
            Category Not Found
          </Typography>
          <Link href="/products" style={{ textDecoration: 'none' }}>
            <Button variant="contained">
              Back to Products
            </Button>
          </Link>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Navbar />

      {/* Breadcrumbs */}
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Breadcrumbs>
          <Link href="/" style={{ textDecoration: 'none', color: '#1976d2' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Home sx={{ fontSize: 16 }} />
              <Typography variant="body2">Home</Typography>
            </Box>
          </Link>
          <Link href="/products" style={{ textDecoration: 'none', color: '#1976d2' }}>
            <Typography variant="body2">Products</Typography>
          </Link>
          <Typography variant="body2" color="text.primary">
            {data.title}
          </Typography>
        </Breadcrumbs>
      </Container>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
            {data.icon}
            <Box>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>
                {data.title}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                {data.description}
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Product Image */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 400,
            borderRadius: 2,
            overflow: 'hidden',
            mb: 4,
          }}
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1976d2' }}>
                Key Features
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {data.features.map((feature, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <VerifiedUser sx={{ color: '#1976d2', fontSize: 24 }} />
                    <Typography variant="body1" sx={{ color: '#000000' }}>
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, height: '100%' }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1976d2' }}>
                Applications
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {data.applications.map((app, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LocalHospital sx={{ color: '#1976d2', fontSize: 24 }} />
                    <Typography variant="body1" sx={{ color: '#000000' }}>
                      {app}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Products List */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#1976d2', textAlign: 'center' }}>
          Available Products
        </Typography>
        <Grid container spacing={3}>
          {data.items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  border: '2px solid rgba(25, 118, 210, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                    borderColor: '#1976d2',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1976d2' }}>
                  {item}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: 6,
          mt: 4,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Interested in {data.title}?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Contact us today for pricing, specifications, and availability.
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
              Contact Us
            </Button>
          </Link>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

