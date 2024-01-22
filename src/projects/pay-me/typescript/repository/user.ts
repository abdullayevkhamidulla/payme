import { User } from '../entities';
import { BaseRepository } from './base';

export class UserRepository extends BaseRepository<User> {
	create(user: User) {
		if (this.isExist((u) => u.phone === user.phone))
			throw new Error(`This User already exist phone=${user.phone}`);

		this.add(user);
	}

	getUsersByPhoneNumber(phone: string) {
		const users: User[] = this.list.filter((user) => user.phone === phone);

		if (users.length === 0) throw new Error(`Users not found for this phone=${phone}`);

		return users;
	}
}
