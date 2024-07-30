import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroSection from './HeroSection'; // Adjust the import path accordingly

describe('Hero Section Tests', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  test('should find the parent element with "100 Thousand Songs, ad-free" text (case-insensitive) and an image', () => {
    const parentElement = screen.getByText(/100 Thousand Songs, ad-free/i).parentElement;
    const image = parentElement.querySelector('img');

    expect(parentElement).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  test('should check the background color of the parent element', () => {
    const parentElement = screen.getByText(/100 Thousand Songs, ad-free/i).parentElement;
    expect(parentElement).toHaveStyle('background-color: #fff'); // Adjust background-color value as per your CSS
  });
});
