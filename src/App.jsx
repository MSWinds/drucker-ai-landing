import React from 'react';
import Layout from './layout/Layout';
import HeroSection from './features/welcome/HeroSection';
import MissionGrid from './features/mission/MissionGrid';
import QuestionForm from './features/interaction/QuestionForm';

function App() {
  return (
    <Layout>
      <HeroSection />
      <MissionGrid />
      <QuestionForm />
    </Layout>
  );
}

export default App;
;
