'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  Grid,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Badge,
} from '@mui/material';
import {
  Search,
  FavoriteBorder,
  ShoppingCart,
  Menu as MenuIcon,
  Close,
  LocalHospital,
  Phone,
  Email,
} from '@mui/icons-material';
import Link from 'next/link';
// import Grid from "@mui/material/Grid";


const Navbar = () => {
  const [productsAnchor, setProductsAnchor] = useState<null | HTMLElement>(null);
  const [brandsAnchor, setBrandsAnchor] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const productsMenuOpen = Boolean(productsAnchor);
  const brandsMenuOpen = Boolean(brandsAnchor);

  const handleProductsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProductsAnchor(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsAnchor(null);
  };

  const handleBrandsMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setBrandsAnchor(event.currentTarget);
  };

  const handleBrandsMenuClose = () => {
    setBrandsAnchor(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const productsCategories = [
    'Diagnostic Equipment',
    'Hospital Furniture',
    'Surgical Instruments',
    'Laboratory Equipment',
    'ICU & Emergency',
    'PPE & Safety',
  ];

  const categoriesList = [
    'ICU Equipment',
    'Surgery Tools',
    'Hospital Furniture',
    'Lab & Diagnostic',
    'Consumables',
    'Oxygen & Respiratory',
    'Emergency items',
  ];

  const servicesList = [
    'Medical Equipment Supply',
    'Hospital/Clinic Setup',
    'Installation & Maintenance',
    'Equipment Repair & Calibration',
    'Annual Maintenance Contract (AMC)',
  ];

  const industriesList = [
    'Hospitals',
    'Clinics',
    'Diagnostic Labs',
    'Govt Tenders',
    'NGOs & Healthcare Orgs',
  ];

  const brandsList = [
    'Philips',
    'Mindray',
    'Dr Morepen',
    'Medtronic',
    'Siemens',
    'Omron',
  ];

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', hasMenu: true, menuType: 'products' },
    { label: 'Categories', href: '/categories' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Brands', hasMenu: true, menuType: 'brands' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const drawer = (
      <Box sx={{ width: 280, backgroundColor: '#ffffff' }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        p: 2,
        backgroundColor: '#000000',
        color: 'white',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocalHospital sx={{ fontSize: 24, color: 'white' }} />
          <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
            Medical Equipment
          </Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.label}>
            <ListItem disablePadding>
              <ListItemButton component={Link} href={item.href || '#'}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
            {item.label === 'Products' && (
              <List component="div" disablePadding>
                {productsCategories.map((category) => (
                  <ListItem key={category} disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={category} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
            {item.label === 'Brands' && (
              <List component="div" disablePadding>
                {brandsList.map((brand) => (
                  <ListItem key={brand} disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={brand} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: '#ffffff',
          color: '#000000',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          borderBottom: '2px solid #000000',
        }}
      >
        {/* Top Bar with Contact Info */}
        <Box
          sx={{
            backgroundColor: '#000000',
            color: 'white',
            py: 0.5,
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Container maxWidth="xl">
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 3, fontSize: '0.875rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Phone sx={{ fontSize: 14 }} />
                <Typography variant="body2">+91-1234567890</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Email sx={{ fontSize: 14 }} />
                <Typography variant="body2">info@medicalequipment.com</Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1.5, justifyContent: 'space-between' }}>
            {/* Logo/Brand with Medical Icon */}
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    backgroundColor: '#000000',
                    borderRadius: 2,
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LocalHospital sx={{ fontSize: 28, color: 'white' }} />
                </Box>
                <Box>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      color: '#000000',
                      fontSize: { xs: '1.1rem', md: '1.4rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    Medical Equipment
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#666',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    Trusted Healthcare Solutions
                  </Typography>
                </Box>
              </Link>
            </Box>

            {/* Desktop Navigation - Centered */}
            <Box sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' }, 
              gap: 0.5,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Button
                component={Link}
                href="/"
                sx={{
                  color: '#000000',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    color: '#000000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 2,
                    backgroundColor: '#000000',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                Home
              </Button>

              <Button
                onClick={handleProductsMenuOpen}
                sx={{
                  color: '#000000',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    color: '#000000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 2,
                    backgroundColor: '#000000',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                Products
              </Button>

              <Button
                component={Link}
                href="/categories"
                sx={{
                  color: '#000000',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    color: '#000000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 2,
                    backgroundColor: '#000000',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                Categories
              </Button>

              <Button
                component={Link}
                href="/services"
                sx={{
                  color: '#000000',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    color: '#000000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 2,
                    backgroundColor: '#000000',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                Services
              </Button>

              <Button
                component={Link}
                href="/industries"
                sx={{
                  color: '#000000',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    color: '#000000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 2,
                    backgroundColor: '#000000',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                Industries
              </Button>

              <Button
                onClick={handleBrandsMenuOpen}
                sx={{
                  color: '#000000',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    color: '#000000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 2,
                    backgroundColor: '#000000',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                Brands
              </Button>

              <Button
                component={Link}
                href="/about"
                sx={{
                  color: '#000000',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    color: '#000000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 2,
                    backgroundColor: '#000000',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                About
              </Button>

              <Button
                component={Link}
                href="/contact"
                sx={{
                  color: '#000000',
                  fontWeight: 600,
                  px: 2.5,
                  py: 1,
                  borderRadius: 2,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    color: '#000000',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 0,
                    height: 2,
                    backgroundColor: '#000000',
                    transition: 'width 0.3s ease',
                  },
                  '&:hover::after': {
                    width: '60%',
                  },
                }}
              >
                Contact
              </Button>
            </Box>

            {/* Right Side Icons */}
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <IconButton
                sx={{
                  color: '#000000',
                  borderRadius: 2,
                  p: 1,
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease',
                }}
                title="Search"
              >
                <Search />
              </IconButton>
              <IconButton
                sx={{
                  color: '#000000',
                  borderRadius: 2,
                  p: 1,
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease',
                }}
                title="Wishlist"
              >
                <Badge badgeContent={0} color="error">
                  <FavoriteBorder />
                </Badge>
              </IconButton>
              <IconButton
                sx={{
                  color: '#000000',
                  borderRadius: 2,
                  p: 1,
                  '&:hover': { 
                    backgroundColor: 'rgba(25, 118, 210, 0.08)',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease',
                }}
                title="Cart"
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>

              {/* Mobile Menu Button */}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Products Mega Menu */}
        <Menu
          anchorEl={productsAnchor}
          open={productsMenuOpen}
          onClose={handleProductsMenuClose}
          MenuListProps={{
            'aria-labelledby': 'products-button',
          }}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: 600,
              maxWidth: 800,
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            },
          }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <Paper sx={{ p: 3, backgroundColor: '#fafafa' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LocalHospital sx={{ fontSize: 24, color: '#000000' }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#000000' }}>
                Product Categories
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {productsCategories.map((category) => (
                <Grid item xs={6} key={category}>
                  <MenuItem
                    component={Link}
                    href={`/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={handleProductsMenuClose}
                    sx={{
                      py: 1.5,
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                      },
                    }}
                  >
                    <Typography variant="body1">{category}</Typography>
                  </MenuItem>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Menu>

        {/* Brands Mega Menu */}
        <Menu
          anchorEl={brandsAnchor}
          open={brandsMenuOpen}
          onClose={handleBrandsMenuClose}
          MenuListProps={{
            'aria-labelledby': 'brands-button',
          }}
          PaperProps={{
            sx: {
              mt: 1.5,
              minWidth: 600,
              maxWidth: 800,
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            },
          }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#000000' }}>
              Our Brands
            </Typography>
            <Grid container spacing={2}>
              {brandsList.map((brand) => (
                <Grid item xs={4} key={brand}>
                  <MenuItem
                    component={Link}
                    href={`/brands/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={handleBrandsMenuClose}
                    sx={{
                      py: 2,
                      borderRadius: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(0, 0, 0, 0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        borderColor: '#000000',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1,
                      }}
                    >
                      <Typography variant="h6" sx={{ color: '#000000', fontWeight: 600 }}>
                        {brand.charAt(0)}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {brand}
                    </Typography>
                  </MenuItem>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Menu>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

