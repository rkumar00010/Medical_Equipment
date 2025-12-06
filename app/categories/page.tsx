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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle,
  LocalHospital,
  Science,
  Healing,
  Warning,
  Biotech,
  Inventory,
  Air,
} from '@mui/icons-material';

export default function CategoriesPage() {
  const categories = [
    {
      title: 'ICU Equipment',
      icon: <Warning sx={{ fontSize: 50, color: '#1976d2' }} />,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
      items: [
        'Ventilators',
        'Patient Monitors',
        'Infusion Pumps',
        'Syringe Pumps',
        'ICU Beds',
        'Defibrillators',
        'Pulse Oximeters',
        'Nebulizers',
      ],
    },
    {
      title: 'Surgery Tools',
      icon: <Healing sx={{ fontSize: 50, color: '#1976d2' }} />,
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
      items: [
        'Surgical Instruments',
        'Laparoscopic Equipment',
        'Electrosurgical Units',
        'Operating Lights',
        'Operating Tables',
        'Anesthesia Machines',
        'Surgical Lasers',
        'Endoscopes',
      ],
    },
    {
      title: 'Hospital Furniture',
      icon: <LocalHospital sx={{ fontSize: 50, color: '#1976d2' }} />,
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop',
      items: [
        'Hospital Beds',
        'Patient Trolleys',
        'Wheelchairs',
        'Stretchers',
        'Medical Cabinets',
        'Examination Tables',
        'Waiting Room Furniture',
        'Storage Solutions',
      ],
    },
    {
      title: 'Lab & Diagnostic',
      icon: <Science sx={{ fontSize: 50, color: '#1976d2' }} />,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      items: [
        'X-Ray Machines',
        'Ultrasound Scanners',
        'ECG Machines',
        'Blood Analyzers',
        'Microscopes',
        'CT Scanners',
        'MRI Equipment',
        'Lab Equipment',
      ],
    },
    {
      title: 'Consumables',
      icon: <Inventory sx={{ fontSize: 50, color: '#1976d2' }} />,
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
      items: [
        'Syringes & Needles',
        'IV Sets',
        'Catheters',
        'Surgical Gloves',
        'Bandages & Dressings',
        'Medical Tapes',
        'Disposable Masks',
        'Lab Consumables',
      ],
    },
    {
      title: 'Oxygen & Respiratory',
      icon: <Air sx={{ fontSize: 50, color: '#1976d2' }} />,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
      items: [
        'Oxygen Concentrators',
        'Oxygen Cylinders',
        'Ventilators',
        'CPAP Machines',
        'Nebulizers',
        'Oxygen Masks',
        'Respiratory Monitors',
        'Pulse Oximeters',
      ],
    },
    {
      title: 'Emergency Items',
      icon: <Warning sx={{ fontSize: 50, color: '#1976d2' }} />,
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop',
      items: [
        'Emergency Carts',
        'Defibrillators',
        'First Aid Kits',
        'Ambulance Equipment',
        'Emergency Lights',
        'Crash Carts',
        'Emergency Medications',
        'Trauma Kits',
      ],
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
            Product Categories
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
            Explore our wide range of medical equipment categories
          </Typography>
        </Container>
      </Box>

      {/* Categories Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
                    height: 180,
                    width: '100%',
                  }}
                >
                  <Image
                    src={category.image || 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop'}
                    alt={category.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: 2,
                      p: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    {category.icon}
                  </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#1976d2' }}>
                    {category.title}
                  </Typography>
                  <List dense>
                    {category.items.slice(0, 5).map((item, idx) => (
                      <ListItem key={idx} disablePadding>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircle sx={{ fontSize: 16, color: '#1976d2' }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            variant: 'body2',
                          }}
                        />
                      </ListItem>
                    ))}
                    {category.items.length > 5 && (
                      <Typography variant="body2" sx={{ pl: 4, pt: 1, color: '#000000' }}>
                        +{category.items.length - 5} more items
                      </Typography>
                    )}
                  </List>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: 2,
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(10, 15, 31, 0.08)',
                      },
                    }}
                  >
                    View Category
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

