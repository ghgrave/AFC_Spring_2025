Consuming APIs (third party = THEY)
1) THEY decide on endpoints
2) THEY decide how data will be sent - JSON and XML
3) THEY decide how much data to sane
4) THEY decide what they data will look like - structure

Building (serving) APIs- US!!!
1) WE decide on endpoints
2) WE decide how data will be sent - JSON and XML
3) WE decide how much data to send
4) WE decide what they data will look like - structure

CRUD functional app!!! (RCDU)
NOTE: verbs and routes
Create - POST
Read - GET
Update - PUT
Delete - DELETE

ETHAN (da Boss)  says:
1) Whatever you send back it must be JSON
2) Only allowed 2 endpoints:
   3) /api/bucket
   4) /api/bucket/<id>

READ
1) WE decide on endpoints - GET  /api/bucket
2) WE decide how data will be sent - JSON
3) WE decide how much data to send - send back everything
4) WE decide what they data will look like - structure - array of objects

EXAMPLE data:
[
   {
      id: 1,
      description: "Learn PostgreSQL!!",
      isComplete: false,
   }
]

CREATE
1) endpoint - POST  /api/bucket
2) JSON
3) ONE thing - "receipt" from the Db
4) Return ONE object

EXAMPLE data:

{
    id: 1,
    description: "Learn PostgreSQL!!",
    isComplete: false,
}

DELETE
1) endpoint - DELETE /api/bucket/<id>
2) JSON
3) ONE thing - "receipt" from the Db
4) Return ONE object

UPDATE
1) endpoint - PUT /api/bucket/<id>
2) JSON
3) ONE thing - "receipt" from the Db
4) Return ONE object




