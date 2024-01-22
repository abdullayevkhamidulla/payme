import { Base } from './base';

export class User extends Base {
	constructor(
		public firstName: string,
		public lastName: string,
		public phone: string,
		private password: string,
		public email: string
	) {
		super();
	}

	setPassword(password: string) {
		this.password = password;
	}

	getPassword() {
		return this.password;
	}
}
