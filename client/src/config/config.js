// Google Maps
// 
// geocoding API endpoint

const config = {
	geocodeAPI: 'https://maps.googleapis.com/maps/api/geocode/',
	googleKey: 'AIzaSyAT_4eVTbmGEN80-O7BGD3N5xbPqtEBEVE',
	googleId: 'web-app-145312',
	timeZoneDbGateway: 	'http://api.timezonedb.com',
	timeZoneDbKey: 'ZV2ERPJJEQ63',
	getTimeZoneAPI: {
		endpoint: '/v2/get-time-zone',
		url: this.this.timeZoneDbGateway + this.endpoint,
		format: ['optional/required', 'default', params ],
		key: ['required', this.this.timeZoneDbKey , [this.this.timeZoneDbKey]]
		format: ['optional', xml, [xml, json]],
		callback ['optioinal', callback, [callback(input) => input] ]


}