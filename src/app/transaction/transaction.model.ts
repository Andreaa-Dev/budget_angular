export enum TransactionType {
  'income',
  'expense',
}

export interface Transaction {
  title: string;
  amount: number;
  type: TransactionType;
}
