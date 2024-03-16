const APP_CONSTANTS = {
  apiPrefix: '/salary-hero',
  params: 'params',
  query: 'query',
  body: 'body',
  file: 'file',
  service: 'salary-hero',
};

const VN_TIME_ZONE = {
  HOUR: '+0700',
  CITY: 'Asia/Ho_Chi_Minh',
};

const DEFAULT_PAGING = {
  limit: 100,
  skip: 0,
};

/**
 * Type to define sql sort order
 */
enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export { APP_CONSTANTS, VN_TIME_ZONE, DEFAULT_PAGING, SortOrder };
