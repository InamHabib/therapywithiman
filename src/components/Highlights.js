import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';


const items = [
  {
    icon: <FavoriteRoundedIcon />,
    title: "Compassionate Care",
    description:
      "Experience our commitment to providing empathetic and personalized therapy sessions, tailored to your unique journey towards healing and self-discovery.",
  },
  {
    icon: <LockRoundedIcon />,
    title: "Trust and Confidentiality",
    description:
      "Step into a safe and supportive environment built on trust, where your confidentiality is paramount. Our therapists create a space for you to freely explore your thoughts and emotions without judgment.",
  },
  {
    icon: <SpaRoundedIcon />,
    title: "Holistic Approach",
    description:
      "Benefit from our holistic approach to mental health, addressing not just symptoms but also underlying factors contributing to your well-being. We prioritize your overall wellness, integrating various therapeutic techniques for comprehensive support.",
  },
  {
    icon: <BuildRoundedIcon />,
    title: "Innovative Solutions",
    description:
      "Stay at the forefront of therapy with our innovative approaches and tools designed to enhance your therapeutic experience. From online sessions to interactive resources, we leverage technology to make therapy more accessible and engaging.",
  },
  {
    icon: <ContactSupportRoundedIcon />,
    title: "Responsive Support",
    description:
      "Feel supported every step of the way with our dedicated team of therapists and staff. Whether you have questions, need assistance, or simply want to share your progress, we're here to provide reliable and compassionate support.",
  },
  {
    icon: <AssignmentTurnedInRoundedIcon />,
    title: "Attention to Detail",
    description:
      "Experience therapy with attention to detail, where every aspect of your session is carefully considered to ensure a comfortable and enriching experience. From the ambiance of our space to the personalized guidance of our therapists, we prioritize your well-being in every detail.",
  }
];


export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
       
      }}
      style={{  backgroundImage: 'linear-gradient(180deg, #FFDFD3, #FFF)'}}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
        id="therapeuticadvantages"
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" sx={{color:"#000"}}>
          Therapeutic Advantages
          </Typography>
          <Typography variant="body1" sx={{ color: '#000' }}>
          Discover the unique strengths of our therapeutic approach:
            adaptability, resilience, compassionate design, and innovative
            solutions. Benefit from dependable guidance and meticulous attention
            to every aspect of your therapeutic journey.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
