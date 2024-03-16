import { Request } from 'express';
import URLParams from './urlparams';

/**
 * Interface to add extra modifiers to request.
 */
export default interface RequestWithUser extends Request {
  userId: string;
  customerToken: string;
  role: string;
  startTime?: number;
  userAgent?: { [key: string]: any };
  searchParams?: URLParams;
  customer_id?: string;
  reward_configuration_id?: string;
  customer_claims?: any;
  phone?: string;
}
