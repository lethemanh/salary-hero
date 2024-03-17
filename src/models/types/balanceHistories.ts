export interface BalanceHistoryInterface {
  id?: number;
  worker_id: number;
  old_balance: number;
  new_balance: number;
  created_at?: Date;
  updated_at?: Date;
}
