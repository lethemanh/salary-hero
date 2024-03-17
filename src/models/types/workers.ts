export interface WorkerInterface {
  id?: number;
  worker_name?: string;
  salary?: number;
  salary_type?: string;
  current_balance?: number;
  created_at?: Date;
  updated_at?: Date;
}

export enum SalaryType {
  MONTHLY = 'MONTHLY',
  DAILY = 'DAILY',
}
