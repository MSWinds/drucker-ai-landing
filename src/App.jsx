import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Context from './components/Context';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Hero />
      <Context />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

export default App;
