// src/pages/CreatePage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CreatePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Create Page</h1>
        <p className="text-lg text-gray-600">This is a placeholder for your "Create" content.</p>
      </main>
      <Footer />
    </div>
  );
};

export default CreatePage;