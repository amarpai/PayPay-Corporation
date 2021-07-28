/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

// Validation on Rating for Employee from 1 to 5 based on Performance.
const min = [
  1,
  'The value of path `{PATH}` ({VALUE}) is beneath the limit ({MIN}).',
];
const max = [
  5,
  'The value of path `{PATH}` ({VALUE}) exceeds the limit ({MAX}).',
];

export const EmployeeSchema = new mongoose.Schema({
  employee_name: {
    type: String,
    required: true,
  },
  employee_id: {
    type: Number,
    required: true,
  },
  joining_date: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  rating: { type: Number, min: min, max: max, required: true },  
  review_request: [{
    type: Number
  }],
  department: [
    {
      type: String,
    },
  ],
  country: {
    type: String,
    required: true,
  },
  review_comments: [{ name: String, employee_id: Number, rating: Number, comment: String }],
});
