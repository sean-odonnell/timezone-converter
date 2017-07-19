'use strict';

module.exports = (function serve () {
	const app = require('./server');
	const PORT = process.env.PORT || 8000;

	app.listen(PORT, () => {
	  console.log(`App listening on port ${PORT}!`);
	});
}).call()



