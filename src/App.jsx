import React from "react";
import KeyFrame from "./components/KeyFrame";
import ButtonTap from "./ButtonTap";
import TextMotion from "./components/TextMotion";
import TransitionType from "./components/TransitionType";
import Varients from "./components/Varients";
import ScrollIntoView from "./components/ScrollIntoView";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { AnimatePresence } from "framer-motion";

export default function App() {
  return (
    <div>
      <Home />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<KeyFrame />}></Route>
          <Route path="/keyFrame" element={<KeyFrame />}></Route>
          <Route path="/textMotion" element={<TextMotion />}></Route>
          <Route path="/transitionType" element={<TransitionType />}></Route>
          <Route path="/varients" element={<Varients />}></Route>
          <Route path="/scrollIntoView" element={<ScrollIntoView />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}
