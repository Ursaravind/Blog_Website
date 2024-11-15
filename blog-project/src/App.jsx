import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import './App.css'; // Ensure this file contains the necessary CSS for transitions

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={location.key} // Use location.key instead of pathname for better transitions
          classNames="slide"
          timeout={300}
        >
          <div> {/* Ensure CSSTransition has only one direct child */}
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}
