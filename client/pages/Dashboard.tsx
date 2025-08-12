import React from 'react';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';
import { TemplatesContent } from '../components/dashboard/TemplatesContent';
import { Footer } from '../components/dashboard/Footer';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <TemplatesContent />
          <Footer />
        </main>
      </div>
    </div>
  );
}
