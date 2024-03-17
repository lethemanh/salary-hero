import { Request } from 'express';
import URLParams from './urlparams';

/**
 * Interface to add extra modifiers to request.
 */
export default interface CustomRequest extends Request {
  startTime?: number;
  searchParams?: URLParams;
}
