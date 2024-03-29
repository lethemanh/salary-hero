import { SortOrder } from "utils/constants";

/**
 * Used for filtering and paging results for getAll requests
 */
export default interface URLParams {
  q?: string;
  pageSize?: number;
  currentPage?: number;
  from?: string;
  to?: string;
  sort?: string;
  order?: SortOrder;
  [key: string]: any;
}
