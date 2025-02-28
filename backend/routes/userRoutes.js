import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import User from '../models/User.js';

const router = express.Router();

// Admin route - View all classes
router.get('/admin/classes', authMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access Denied' });

  // Fetch all staff members and their classes (Dummy data for now)
  const classes = [
    { className: 'Class 1', teacher: 'Mr. Smith', students: 30 },
    { className: 'Class 2', teacher: 'Mrs. Johnson', students: 25 },
  ];

  res.json(classes);
});

// Staff route - View and update class details
router.get('/staff/class', authMiddleware, async (req, res) => {
  if (req.user.role !== 'staff') return res.status(403).json({ message: 'Access Denied' });

  // Dummy class data for a specific staff
  res.json({ className: 'Class 5', students: 22 });
});

export default router;
