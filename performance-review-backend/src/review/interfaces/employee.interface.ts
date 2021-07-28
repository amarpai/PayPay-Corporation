/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Employee extends Document {
  readonly employee_name: string;
  readonly employee_id: number;
  readonly joining_date: string;
  readonly designation: string;
  readonly rating: number;
  readonly country: string;
  readonly department: [string];
  readonly review_request: [number];
  readonly review_comments: [{ name: string; employee_id: Number; rating: Number, comment: string }];
}
