exports.addMovie = async (collection, movieObj) => {
	const addResult = await collection.insertOne(movieObj);
	console.log(addResult);
};

exports.findMovie = async (collection, movieObj) => {
	const findResult = await collection.find(movieObj).toArray();
	console.log(findResult);
};

exports.findOneMovie = async (collection, movieObj) => {
	const findOneResult = await collection.findOne(movieObj);
	console.log(findOneResult);
};

exports.deleteAll = async (collection, movieObj) => {
	const deleteAllResult = await collection.deleteMany(movieObj);
	console.log(deleteAllResult);
};

exports.deleteMovie = async (collection, movieObj) => {
	const deleteResult = await collection.deleteOne(movieObj);
	console.log(deleteResult);
};

exports.updateMovie = async (collection, yargsObj) => {

	if (yargsObj.newtitle) {
		const updateResult = await collection.updateOne(
			{ title: yargsObj.title },
			{ $set: { title: yargsObj.newtitle } }
		);
		console.log(updateResult);
	}
	else if (yargsObj.newactor) {
		const updateResult = await collection.updateOne(
			{ actor: yargsObj.actor },
			{ $set: { actor: yargsObj.newactor } }
		);
		console.log(updateResult);
	}
};

exports.updateAll = async (collection, yargsObj) => {

	if (yargsObj.newtitle) {
		const updateAllResult = await collection.updateMany(
			{ title: yargsObj.title },
			{ $set: { title: yargsObj.newtitle } }
		);
		console.log(updateAllResult);
	}
	else if (yargsObj.newactor) {
		const updateAllResult = await collection.updateMany(
			{ actor: yargsObj.actor },
			{ $set: { actor: yargsObj.newactor } }
		);
		console.log(updateAllResult);
	}
};
