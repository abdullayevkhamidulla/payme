import { Card } from '../entities';
import { BaseRepository } from './base';

export class CardRepository extends BaseRepository<Card> {
	create(card: Card) {
		if (this.isExist((c) => c.number === card.number))
			throw new Error(`This item already exist cardNumber=${card.number}`);

		this.add(card);
	}

	getCardsByOwnerId(userId: number) {
		const cards: Card[] = this.list.filter((c) => c.ownerId === userId);

		if (cards.length === 0) throw new Error(`Cards not found for this user with userId=${userId}`);

		return cards;
	}
}
