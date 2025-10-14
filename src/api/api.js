// src/api/api.js
import axios from 'axios';

const API_BASE = "http://localhost:3000/api";

export const getProfile = () => axios.get(`${API_BASE}/profile`);
export const getSkills = () => axios.get(`${API_BASE}/skills`);
export const getProjects = () => axios.get(`${API_BASE}/projects`);
export const sendContactMessage = (data) => axios.post(`${API_BASE}/contact_messages`, { contact_message: data });