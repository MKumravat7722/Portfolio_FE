// src/api/api.js
import axios from 'axios';

// const API_BASE = "http://localhost:3000/api/v1"; // <- include v1
const API_BASE = "https://portfolio-be-4gdn.onrender.com/api/v1"; // <- include v1
export const getHomeData = () => axios.get(`${API_BASE}/homes`);
export const getProfile = () => axios.get(`${API_BASE}/abouts`);
export const getSkills = () => axios.get(`${API_BASE}/skills`);
export const getProjects = () => axios.get(`${API_BASE}/projects`);
export const getServices = () => axios.get(`${API_BASE}/services`);
export const getEducation = () => axios.get(`${API_BASE}/educations`);
export const sendContactMessage = (data) => axios.post(`${API_BASE}/contact_messages`, { contact_message: data });