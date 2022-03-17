import { v4 as uuid } from 'uuid';
import {
	horizon,
	RDR2,
	Fifa,
	AOE4,
	GOW,
	Batman,
	valorant,
	civilization,
	AOE2,
	NBA,
	sekiro,
	witcher,
	mario,
} from '../../Assets/images';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		title: 'Batman: Arkham Knight',
		badge: '',
		image: Batman,
		price: 2399,
		rating: 4.5,
		wishlist: false,
		categoryName: 'Action',
	},
	{
		_id: uuid(),
		title: 'Red Dead Redemption 2',
		badge: '',
		image: RDR2,
		price: 3299,
		rating: 3.5,
		wishlist: false,
		categoryName: 'Action',
	},
	{
		_id: uuid(),
		title: 'Fifa 2022',
		badge: '',
		image: Fifa,
		price: 4199,
		rating: 4,
		wishlist: false,
		categoryName: 'Sports',
	},
	{
		_id: uuid(),
		title: 'Horizon Forbidden West',
		badge: 'New',
		image: horizon,
		price: 3499,
		rating: 4.5,
		wishlist: false,
		categoryName: 'RPG',
	},
	{
		_id: uuid(),
		title: 'God of War',
		badge: 'New',
		image: GOW,
		price: 3299,
		rating: 4.5,
		wishlist: false,
		categoryName: 'RPG',
	},
	{
		_id: uuid(),
		title: 'Age of Empires IV',
		badge: '',
		image: AOE4,
		price: 3299,
		rating: 4,
		wishlist: false,
		categoryName: 'Strategy',
	},
	{
		_id: uuid(),
		title: 'Valorant',
		badge: 'Out of Stock',
		image: valorant,
		price: 2499,
		rating: 1.5,
		wishlist: false,
		categoryName: 'Action',
	},
	{
		_id: uuid(),
		title: 'Civilization VI',
		badge: 'Out of Stock',
		image: civilization,
		price: 2499,
		rating: 3,
		wishlist: false,
		categoryName: 'Strategy',
	},
	{
		_id: uuid(),
		title: 'Age of Empires 2',
		badge: '',
		image: AOE2,
		price: 1099,
		rating: 3.5,
		wishlist: false,
		categoryName: 'Strategy',
	},
	{
		_id: uuid(),
		title: 'NBA 2K22',
		badge: 'New',
		image: NBA,
		price: 2499,
		rating: 3.5,
		wishlist: false,
		categoryName: 'Sports',
	},
	{
		_id: uuid(),
		title: 'Sekiro Shadows Die Twice',
		badge: '',
		image: sekiro,
		price: 1699,
		rating: 2.5,
		wishlist: false,
		categoryName: 'Action',
	},
	{
		_id: uuid(),
		title: 'The Witcher 3: Wild Hunt',
		badge: '',
		image: witcher,
		price: 1999,
		rating: 4,
		wishlist: false,
		categoryName: 'RPG',
	},
	{
		_id: uuid(),
		title: 'Mario Golf: Super Rush',
		badge: '',
		image: mario,
		price: 1399,
		rating: 4,
		wishlist: false,
		categoryName: 'Sports',
	},
];
