all:
	make buildFunction
	make testCurl00inLocal
	make testCurl01inLocal

buildFunction:
	cd functions && npm run build

testCurl00inLocal:
	cd testData && curl -H "Content-Type: application/json" -d @create00.json http://127.0.0.1:5001/hairsalonsmanagementbooking/us-central1/createDocument
	
testCurl01inLocal:
	cd testData && curl -H "Content-Type: application/json" -d @create01.json http://127.0.0.1:5001/hairsalonsmanagementbooking/us-central1/createDocument

testRead00inLocal:
	make testCurl00inLocal
	cd testData && curl -H "Content-Type: application/json" -d @read00.json http://127.0.0.1:5001/hairsalonsmanagementbooking/us-central1/getDocumente
