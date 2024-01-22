import { UserRepository, CardRepository } from './repository';
import { generateCard, generateNumber, generateUser } from './generators';

function init() {
	const userRepository = new UserRepository();
	const cardRepository = new CardRepository();

	const usersCount = generateNumber({ min: 1, max: 10 });
	const additionalCount = generateNumber({ min: 1, max: 10 });

	for (let i = 0; i < usersCount; i++) {
		const user = generateUser();
		userRepository.create(user!);

		const card = generateCard(user.getId());
		cardRepository.create(card);
	}

	for (let i = 0; i < additionalCount; i++) {
		const randomIdx = generateNumber({ min: 0, max: usersCount - 1 });
		const user = userRepository.getByIndex(randomIdx);

		const card = generateCard(user.getId());
		cardRepository.create(card);
	}

	console.log('users = ', userRepository.getList());
	console.log('cards = ', cardRepository.getList());
}

init();
