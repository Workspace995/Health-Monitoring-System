import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import HealthTips from '../components/HealthTips';
import ContactUs from '../components/ContactUs';
import { Container } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <Container>
      <Hero />
      <Features />
      <HealthTips />
      <Testimonials />
      <ContactUs />
      {/* <HealthTips /> */}
    </Container>
  );
};

export default Home;
