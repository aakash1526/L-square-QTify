import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './NavBar'; // Adjust the import path accordingly

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  test('should contain logo, search bar, and a button', () => {
    const logo = screen.getByAltText(/logo/i);
    const searchBar = screen.getByPlaceholderText(/search/i);
    const button = screen.getByRole('button');

    expect(logo).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should check if the logo is vertically centered and has space to its left', () => {
    const logo = screen.getByAltText(/logo/i);
    // Assuming you have a container around the logo that handles the alignment
    const logoContainer = logo.parentElement;

    expect(logoContainer).toHaveStyle('display: flex');
    expect(logoContainer).toHaveStyle('align-items: center');
    expect(logoContainer).toHaveStyle('margin-left: 20px'); // Adjust margin-left value as per your CSS
  });

  test('should check the search bar inside Navbar should contain the placeholder keyword "search" inside it', () => {
    const searchBar = screen.getByPlaceholderText(/search/i);
    expect(searchBar).toBeInTheDocument();
  });

  test('should check if the button has a variant of black background', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: black');
  });

  test('should check if the button\'s text color is a variant of green', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('color: green'); // Adjust color value as per your CSS
  });

  test('should check if the button has some border-radius', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('border-radius: 5px'); // Adjust border-radius value as per your CSS
  });

  test('should check if hovering on the button changes the cursor to a pointer', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('cursor: pointer');
  });

  test('should check if the button is styled with "Poppins" font', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('font-family: Poppins');
  });
});
