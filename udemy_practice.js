cursor = db.people.find();null;

cursor.count()
cursor.hasNext()
true


while(cursor.hasNext() ){printjson(cursor.next() );}

cursor = db.people.find();null;


cursor.forEach(function(doc) 
{
	printjson(doc);
}
)

for(i=0; i<106; i++){db.numbers.insert({_id: i, number: i})}

for(i=0; i<106; i++){db.numbers.insert({_id: i, number: i})}
db.numbers.count();
db.serverStatus().metrics.cursor

cursor = db.numbers.find();null;
for(i=0; i<101; i++){cursor.next() }

cursor.next()

db.people.find({firstName: {$gte: 'A', $lt: 'I'}}).pretty()

db.people.find({firstName: {$gte: 'A', $lt: 'H'}}).pretty()



db.people.find({
	$and: [
		{earnings: {$lte: 7000}},{firstName: 'Christopher'}
		]
	}).pretty()
	
db.people.find({
	$or: [{earnings: 7000}, {firstName: 'Christopher'}]
}).pretty()	


db.people.find({
	$nor: [{earnings: 7000}, {firstName: 'Christopher'}]
}).pretty()	


db.people.find({earnings: {$exists: false}}).pretty()	

db.people.find({earnings: {$exists: true}}).pretty()


db.people.find({'address.country': 'Poland'}).pretty()



db.people.find({$where: 'this.earnings > 7000'}).pretty()

db.people.find({$where: 'obj.earnings > 7000'}).pretty()

db.people.find({hobby: 'motorcycles'}).pretty()
db.people.find({hobby: {$all: ['motorcycles','shooting']}}).pretty()
db.people.find({hobby: {$all: ['motorcycles','shooting','hiking']}}).pretty()
db.people.find({hobby: {$size: 2}}).pretty()

db.people.find({hobby: {$size: {$gt : 1}}}).pretty() --- not works

db.people.find({$where: 'this.hobby.length > 1 && this.hobby instanceof Array'}).pretty()

db.people.find({luckyNumbers: {$exists: true}}).pretty()
db.people.find({luckyNumbers: {$elemMatch: {$gt:15, $lt:20}} }).pretty()

db.people.find({payments: {$elemMatch: {category: 'food'}}}).pretty()
db.people.find({payments: {$elemMatch: {category: 'food', amount: {$gt: 19}}}}).pretty()
db.people.find({payments: {$elemMatch: {category: 'food', amount: {$gt: 100}}}}).pretty()


db.people.find({payments: {$elemMatch: {category: 'food', amount: {$gt: 100}}}}, {earnings: 1, payments: 1}).pretty()

db.people.find({payments: {$elemMatch: {category: 'food', amount: {$gt: 100}}}}, {earnings: 1, 'payments.category': 1}).pretty()


db.people.find({},{luckyNumbers: 1})


db.people.find({luckyNumbers: {$gt: 75}}, {'luckyNumbers.$': 1})
db.people.find({luckyNumbers: {$gt: 75}}, {'luckyNumbers.$': 2})
db.people.find({luckyNumbers: {$gt: 75}}, {'luckyNumbers.$': 3})



db.people.find({}, {luckyNumbers: {$elemMatch: {$gt: 1}} })
db.people.find({luckyNumbers: {$gt: 1}}, {'luckyNumbers.$': 1})

db.people.find({}, {luckyNumbers: {$elemMatch: {$gt: 1}} })
{ "_id" : 2, "luckyNumbers" : [ 23 ] }
{ "_id" : 3 }
{ "_id" : 4 }
{ "_id" : 1, "luckyNumbers" : [ 17 ] }
{ "_id" : 5 }
{ "_id" : 6 }






db.people.find({luckyNumbers: {$gt: 1}}, {'luckyNumbers.$': 1})
{ "_id" : 2, "luckyNumbers" : [ 23 ] }
{ "_id" : 1, "luckyNumbers" : [ 17 ] }



db.people.find({_id: 2}, {luckyNumbers: 1})


db.people.find({_id: 2},{luckyNumbers: {$slice: 3}}).pretty()

db.people.find({_id: 2},{luckyNumbers: {$slice: [2,3]}}).pretty()
db.people.find({_id: 2},{luckyNumbers: {$slice: [-2,2]}}).pretty()

db.people.find().sort({firstName: 1}).pretty()

db.people.find({lastName: {$type: 'string'}, firstName: {$type: 'string'} }, {lastName: 1, firstName : 1}).sort({lastName: 1, firstName: -1}).pretty()


db.people.find({}, {firstName: 1, lastName: 1, 'address.country': 1}).sort({'address.country': 1}).pretty()


db.people.find({luckyNumbers: {$exists: true}}, {luckyNumbers: 1}).sort({luckyNumbers: -1}).pretty()


cursor = db.numbers.find().limit(-103);null;


count = 0;
while(cursor.hasNext()){cursor.next();count +=1;}


db.people.update({_id: 1}, {$addToSet: {hobby: 'motor'}})

db.people.find({_id:1},{hobby:1})
db.people.update({_id: 1}, {$push: {hobby: 'motor'}})


db.people.update({_id: 1},{$push: {boring: 'show business'}, $addToSet: {interesting:'footbal'}})

db.people.find({_id:1}).pretty()

db.people.update({_id: 1}, {$addToSet: {luckyNumbers: {$each: [50,17,50]} }})

db.people.update({_id: 1}, {$addToSet: {luckyNumbers: {$each: [50,17,51,52,53]} }})
db.people.update({_id: 1}, {$push: {luckyNumbers: {$each: [16,17,18,52,53]} }})


db.people.find({_id:1}, {payments: 1}).pretty()



db.people.update({_id:1}, {$addToSet: {payments: {category: 'food', amount: 10, paid: true}} })

db.people.update({_id:1}, {$addToSet: {payments: {category: 'food', amount: 10, paid: false}} })


db.people.find({_id: 2}).pretty()

db.people.update({_id: 2}, {$set: {'luckyNumbers.1': 150}})

db.people.find({_id: 4}).pretty()

db.people.update({_id: 4}, {$set: {'payments.1.paid': false}})

db.people.update({_id:2, luckyNumbers: {$gt: 1000} }, {$set: {'luckyNumbers.$': 999}})
db.people.update({_id:2, luckyNumbers: {$gt: 100} }, {$set: {'luckyNumbers.$': 9}})


db.people.update({_id: 4}, {$set: {'payments.0.parts': 'New Column'}})

db.people.update({_id: 4}, {$set: {'payments.0.Array': [{Fname: 'Shailendra'},{Lname: 'Nagina'},{age: 29}]}})
db.people.find({_id: 4}).pretty()

db.people.update({_id:4}, {$set: {'payments.0.Array.0.Fname': 'Raju'}})



db.test.remove({})

db.test.update({_id:1},{$set: {'value.Fname': 'shailendra', 'value.Lname': 'Nagina'}}, {upsert: true})


db.numbers.find().pretty()

db.numbers.update({number: {$gt: 10}}, {$inc: {number: 10}})

db.numbers.update({number: {$gt: 10}}, {$inc: {number: 10}}, {multi: true})

db.numbers.drop()

load('C:/NodeJS/resources/scripts/crud/initMillion.js')

/*--------------------------------------------------------------------------------------*/

/* Count all the people who are named Pauline Fournier.
*/
db.people.find().limit(1).pretty()

db.people.count({firstName: 'Pauline', lastName: 'Fournier'})
66

Count all the people who are named Pauline Fournier and were born before 01.01.1970.

db.people.count({firstName: 'Pauline', lastName: 'Fournier', birthDate: {$lt: new ISODate("1970-01-01") }})
9

Count all the people who are named:
 Lucas Dubois
 Camille Dubois

db.people.count({firstName: {$in: ['Lucas','Camille'] }, lastName : 'Dubois' });
db.people.count({firstName: {$in: ['Lucas','Camille'] }, lastName : 'Dubois' });
466

db.people.count({$or: [{'wealth.credits': {$size: 0}}, {'wealth.credits': null}]})

db.people.count({'wealth.credits': {$size: 0}})
db.people.count({'wealth.credits': null})

db.people.find({ $or: [ {'wealth.credits': {$size: 0}}, {'wealth.credits': null} ] }).count()

db.people.aggregate([{$group: {_id: '$payments.name', num: {$sum: '$payments.amount'} } }])
db.people.aggregate([{$group: {_id: '$payments.name', num: {$sum: '$payments.amount'} } }]).limit(2).pretty()
db.people.aggregate([{$group: {_id: '$payments.name', num: {$sum: '$payments.amount'} } }]).pretty()

db.people.find({payments: {category: 'relax', name: 'cinema', amount: 12.99}}).count()




db.test1.insertMany([
{ "_id" : 3, "array" : [ 5, 4, 2, 5 ] },
{ "_id" : 4, "array" : [ 1, 5, 8 ] }
])

db.test1.update(
     {_id: {$in: [3,4]}}, 
     {$pull: {array: 5}}
 )

 
 
 
db.people.insert([
{_id: 20, firstName: 'Shailendra', lastName: 'Nagina', famous: false},
{_id: 21, firstName: 'Aadhar', lastName: 'Patidar', famous: true}
])

db.cars.insert([
{_id: 50, personId: 20, Brand: 'Audi', productionYear: 2003},
{_id: 51, personId: 21, Brand: 'Mazda', productionYear: 2009}
]) 


var hubert = db.people.find({firstName: 'Shailendra'})

var hubertCar = db.cars.find({personId: hubert._id})

db.cars.find({personId: 20})
db.cars.find({personId: hubert._id})

hubert
hubertCar

-- Join table --- 
use linking
db.people.aggregate([{
	$lookup: {
		from: 'cars',
		localField: '_id',
		foreignField: 'personId',
		as: 'cars'
	}
}]).pretty()


use ronetoone

db.employees.aggregate([{
	$group: {
		_id: null,
		allDeskIds: {$addToSet: '$deskId'}
	}
}])


db.employees.find().pretty()

var cursor = db.employees.aggregate([{
	$group: {
		_id: null,
		allDeskIds: {$addToSet: '$deskId'}
	}
}])

var array = cursor.next().allDeskIds

db.desks.find({_id: {$nin: [32,37]} })

db.desks.aggregate([
{
	$lookup: {
		from: 'employees',
		localField: '_id',
		foreignField: 'deskId',
		as: 'employees'
	}
}
]).pretty()

db.desks.aggregate([
{
	$lookup: {
		from: 'employees',
		localField: '_id',
		foreignField: 'deskId',
		as: 'employees'
	}
},
{
	$match: {
		employees: {$size: 0}
	}
}
]).pretty()


show collections
items
system.indexes




db.items.find().pretty()


var order = {
			"customerId": 1, 
			"shippingAddress": {},
			"items": [
			{
				"_id": 1,
				"price": 4.99,
				"quantity": 5
			},
			{
				"_id": 2,
				"price": 19.99,
				"quantity":1
			}
			],
			"state":"initial"
}

db.orders.insert(order)


var result = db.orders.update({"_id" : ObjectId("5a7431bad33d85a2cafcb805"), state: 'initial'}, 
							  {$set: {status: 'pending'}, $currentDate: {lastModified: true}})
							  
							  
							  
-- updateProducerFunction

var updateProducerFunction = function(orderId, item){
	return {
		updateOne: {
			filter: {
				_id: item._id,
				pendingOrders: {$ne: orderId},
				quantity: {$gte: item.quantity}
			},
			update: {
				$inc: {quantity: -item.quantity},
				$addToSet: {pendingOrders: orderId}
			}
		}
	}
}	


--- updateAllItems			


/* ----new */

var updateAllItems = function(order){
	var success = true;
	var arrayOfOperation = new Array();
	print('order.items.length');
	for (i=0; i< order.items.length; i++){
		
		
		arrayOfOperation.push(
		updateProducerFunction(order._id, order.items[i]) )
	};
	
	var updateResult = db.items.bulkWrite(arrayOfOperation);
	
	if(updateResult.matchedCount != order.items.length) {
		success = false;
	}
}

var updateAllItems_new = function(){
	var success = true;
	var arrayOfOperation = new Array();
	
	var myCursor = db.orders.find();
	var order = myCursor.toArray();
	
	for (i=0; i < order[0].items.length; i++){
		
		
		arrayOfOperation.push(
		updateProducerFunction(order[0]._id, order[0].items[i]) )
	};
	
	var updateResult = db.items.bulkWrite(arrayOfOperation);
	
	if(updateResult.matchedCount != order[0].items.length) {
		success = false;
	}
}



--- applyPendingOrder

var applyPendingOrder= function(order){
	return updateAllItems(order, pendingItemApplier);
}	

var order = db.orders.find({})
var result = applyPendingOrder(order)

var applyPendingOrder= function(order){
	return updateAllItems(order);
}	  


var order = db.orders.find({})
var result = applyPendingOrder(order)


var result = updateAllItems_new()

/*------------------------------------------------*/

var updateProducerFunction = function(orderId, item){
	return {
		updateOne: {
			filter: {
				_id: item._id,
				pendingOrders: {$ne: orderId},
				quantity: {$gte: item.quantity}
			},
			update: {
				$inc: {quantity: -item.quantity},
				$addToSet: {pendingOrders: orderId}
			}
		}
	}
}	

var updateAllItems_new = function(){
	var success = true;
	var arrayOfOperation = new Array();
	
	var myCursor = db.orders.find();
	var order = myCursor.toArray();
	
	for (i=0; i < order[0].items.length; i++){
		
		
		arrayOfOperation.push(
		updateProducerFunction(order[0]._id, order[0].items[i]) )
	};
	
	var updateResult = db.items.bulkWrite(arrayOfOperation);
	
	if(updateResult.matchedCount != order[0].items.length) {
		success = false;
	}
	
	return success;
}

var result = updateAllItems_new()


/*--------------------------------------------*/

db.orders.insert(
{
        "_id" : 2,
        "customerId" : 1,
        "shippingAddress" : {

        },
        "items" : [
                {
                        "_id" : 1,
                        "price" : 4.99,
                        "quantity" : 5
                },
                {
                        "_id" : 2,
                        "price" : 19.99,
                        "quantity" : 5
                }
        ],
        "state" : "initial",
        "status" : "pending",
        "lastModified" : ISODate("2018-02-02T09:46:17.623Z")
}
)



db.orders.update({_id: 2, state: 'initial'}, 
				{$set: {state: 'pending'},
				$currentDate: {lastModified: true} }
				)
				
db.orders.update({}, {$unset: {status:1}}, false, true);	


/*---get failed item */


function(order) {
	var allItems = new Array();
	
	
}			








/* -----------------------------------------*/

use collections
db.createCollection('capped', {capped: true, size: 102400})


var text = 'a'

for (i=1000; i<25000; i++) {
	var document = {_id: i, value: text};
	db.manual.insert(document);
	db.capped.insert(document);
}

db.ttl.createIndex({date: 1}, {expireAfterSeconds: 10})

db.ttl.insert({_id: 1, date: new ISODate('2044-06-15T21:21:21.221')})
db.ttl.insert({_id: 2, date: new Date()})


db.ttl.insert({_id: 3, date: [new ISODate('2044-06-15T21:21:21.221'), new Date()]})
db.ttl.insert({_id: 4, date: 'String'})

db.ttl.getIndexes()

db.runCommand({collMod: 'ttl', index: {keyPattern: {date: 1}, expireAfterSeconds: 20}})

use validation

db.createCollection('people', {validator: {name: {$exists: true}}})

db.people.insert({name: 'string'})

db.createCollection('people', {validator: {name: {$exists: true, $type: 'string'}}})

db.people.insert({name: '123'})
db.people.insert({name: 123})
db.people.insert({name: null})

db.createCollection('people', {validator: {name: {$exists: true, $type: 'string', $regex: /^[a-zA-Z]{2,}$/}}})
db.people.insert({name: ''})