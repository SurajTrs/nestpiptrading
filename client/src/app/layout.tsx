'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/style.css';
import MainNavbar from '../pages/MainNavbar';
import Footer from '../pages/Footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainNavbar />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
