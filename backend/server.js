const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'rukh_secret_key_2026';

// Mock DB
const users = [];
const courses = [
  { id: 1, title: 'Introduction to Programming for Kids', category: 'Kids', description: 'Learn computational thinking and programming basics.' },
  { id: 2, title: 'Scratch 101', category: 'Kids', description: 'Game programming using Scratch.' },
  { id: 3, title: 'Data Science Bootcamp', category: 'Campus', description: 'Hands-on bootcamp for Data Science.' },
  { id: 4, title: 'Full Stack Web Development', category: 'Campus', description: 'Build responsive UIs and robust servers.' },
  { id: 5, title: 'Advanced Algorithms', category: 'Projects', description: 'Deep dive into algorithms for building powerful applications.' },
  { id: 6, title: 'Software Engineering Best Practices', category: 'Projects', description: 'Professional software engineering for independent teams.' }
];

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { firstName, lastName, email, phone, university, track, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'Email is already in use.' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, name: `${firstName} ${lastName}`, email, phone, university, track, password: hashedPassword };
  users.push(newUser);
  res.status(201).json({ message: 'Application submitted successfully.' });
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(400).json({ error: 'Invalid login credentials.' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: 'Invalid login credentials.' });
  }
  const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

// Courses endpoint
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
