import { Base } from './base';

export type CARD_TYPE = 'UZCARD' | 'HUMO' | 'VISA';
export type BANK_NAME = 'TBC' | 'NBU' | 'KAPITAL_BANK';

export class Card extends Base {
	private balance = 0;

	constructor(
		public number: string,
		public pin: string,
		public expiry: string,
		public type: CARD_TYPE,
		public ownerId: number,
		public bankName: BANK_NAME
	) {
		super();
	}

	setBalance(balance: number) {
		this.balance = balance;
	}

	getBalance() {
		return this.balance;
	}
}
