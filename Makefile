all:
	make buildFunction
	make testCurl00inLocal
	make testCurl01inLocal

buildFunction:
	cd functions && npm run build

testCurl00inLocal:
	cd testData && curl -H "Content-Type: application/json" -d @inputData00.json http://127.0.0.1:5001/hairsalonsmanagementbooking/us-central1/createDocument
	
testCurl01inLocal:
	cd testData && curl -H "Content-Type: application/json" -d @inputData01.json http://127.0.0.1:5001/hairsalonsmanagementbooking/us-central1/createDocument