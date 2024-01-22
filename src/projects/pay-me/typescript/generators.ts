import { faker } from '@faker-js/faker';
import { User, Card } from './entities';
import { BANK_NAME, CARD_TYPE } from './entities/card';

export function generateUser() {
	const user = new User(
		faker.person.firstName(),
		faker.person.lastName(),
		faker.finance.creditCardNumber({ issuer: '+998-##-###-##-##' }),
		faker.internet.password(),
		faker.internet.email()
	);

	return user;
}

function expiry() {
	let month: string | number = faker.number.int({ min: 1, max: 12 });
	month = month < 10 ? `0${month}` : month;

	const year = faker.number.int({ min: 23, max: 28 });

	return `${month}/${year}`;
}

export function generateCard(ownerId = 1) {
	const types: CARD_TYPE[] = ['HUMO', 'UZCARD', 'VISA'];
	const names: BANK_NAME[] = ['KAPITAL_BANK', 'NBU', 'TBC'];

	return new Card(
		faker.finance.creditCardNumber({ issuer: '####-####-####-####' }),
		faker.finance.pin(),
		expiry(),
		types[Math.floor(Math.random() * types.length)],
		ownerId,
		names[Math.floor(Math.random() * names.length)]
	);
}

export function generateNumber(args: { min: number; max: number }) {
	return faker.number.int(args);
}
