from flask import Flask
from flask import request
from urllib.parse import urlencode
import requests
import json

server = Flask(__name__)
api_key = "AIzaSyAWtsz4ALYdHQJKRSeGv-invChqgL7tAFs"

@server.route('/location')
def location():
	city_name = request.values.get('city-name')
	data_type = "json"
	endpoint = f"https://maps.googleapis.com/maps/api/place/autocomplete/{data_type}"
	params = {"input": city_name, "key": api_key}
	url_params = urlencode(params)
	print(url_params)
	url = f"{endpoint}?{url_params}"
	print(url)
	r = requests.get(url)
	print(r.status_code)

	data = {}
	index = 1
	for res in r.json()['predictions']:
		if(res['description'].split(',')[0].lower() == city_name):
			key = 'location_'+str(index)
			location = {}
			if(len(res['description'].split(','))<3):
				location['city'] = res['description'].split(',')[0]
				location['country'] = res['description'].split(',')[1]
			else:
				location['city'] = res['description'].split(',')[0]
				location['province'] = res['description'].split(',')[1]
				location['country'] = res['description'].split(',')[2]
			data[key] = location
			index += 1

	return data

if __name__ == '__main__':
	server.run(debug=True)
