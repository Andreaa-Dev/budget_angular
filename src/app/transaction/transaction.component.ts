import { Component, Input, Output } from '@angular/core';
import { TransactionType } from './transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent {
  // transactionType!: TransactionType;
  @Input() transactionType!: TransactionType;
  @Output() onTransactionAdded!: () => void;

  addTransaction(amount: number, title: string) {
    // logic
    const newTransaction = {amount, title, this.transactionType}
    this.onTransactionAdded.emit(newTransaction);
  }
}
