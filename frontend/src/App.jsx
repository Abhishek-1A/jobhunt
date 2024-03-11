import React from "react";
import "./App.css";
import { Context } from "./main";
import {
  BrowserRouter as Router,
  Routes,
  Router,
  Route,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import PostJobs from "./components/Job/PostJob";
import Application from "./components/Application";
import MyApplication from "./components/MyApplication";
import NotFound from "./components/NotFound";
import axios from "axios";
import { Toaster } from "react-hot-toast";
const App = () => {
  return;
  <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </>;
};

export default App;
