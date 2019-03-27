import Guest from '../models/guest';
import Present from '../models/present';
import Dedication from '../models/dedication';

import guests from './guests.json';
import presents from './presents.json';
import dedications from './dedications.json';

const dummyData = () => {

	const deleteDummyData = () => {
		const deletedDataPromises = [
			new Promise((resolve, reject) => {
				Guest.deleteMany(err => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				});
			}),
			new Promise((resolve, reject) => {
				Present.deleteMany(err => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				});
			}),
			new Promise((resolve, reject) => {
				Dedication.deleteMany(err => {
					if (err) {
						reject(err);
					} else {
						resolve();
					}
				});
			})
		];
		return Promise.all(deletedDataPromises);
	};

	const loadDummyData = () => {
		const loadedDataPromises = [
			new Promise((resolve, reject) => {
				Guest.insertMany(guests, (err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result);
					}
				});
			}),	
			new Promise((resolve, reject) => {
				Present.insertMany(presents, (err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result);
					}
				});
			}),
			new Promise((resolve, reject) => {
				Dedication.insertMany(dedications, (err, result) => {
					if (err) {
						reject(err);
					} else {
						resolve(result);
					}
				});
			})
		];
		return Promise.all(loadedDataPromises);
	};

	deleteDummyData()
		.then(() => {
			loadDummyData()
				.then(() => console.log('Data loaded from JSON files into database'))
				.catch(err => console.error(err));
		})
		.catch(err => console.error(err));
};

export default dummyData;