var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

exports.ReadData = function(res){
    MongoClient.connect('mongodb://localhost:27017/',{ useNewUrlParser: true }, function(err, dbvar){
        if(err) throw err

        var coll= dbvar.db('TodoListDB');
        coll.collection('todo').find().toArray(function(err,data){
            if(err) throw err;

            console.log("Data from mongo to Node" + data);
            dataArr = JSON.stringify(data);
            console.log("dataArr"+ dataArr);
            res.send(dataArr);
            dbvar.close();
        })
        dbvar.close();
    })
}
exports.InsertData = function(req){
    MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(err,dbvar){
        if(err) throw err

        var coll=dbvar.db("TodoListDB");
        coll.collection('todo').insert(req,true,function(err,data){
            if(err) throw err

            console.log('1 document inserted');
            dbvar.close();
        })
        dbvar.close()
    })
}
exports.DeleteAll= function(){
    MongoClient.connect('mongodb://localhost:27017/',{useNewUrlParser:true},function(err,dbvar){
        if(err) throw err
        
        var coll= dbvar.db("TodoListDB");
        coll.collection('todo').deleteMany({},true,function(err,data){
            if(err) throw err

            console.log('Documents Deleted');
            dbvar.close();
        })
        dbvar.close();
    })
}
exports.DeleteSelected=function(req){
    MongoClient.connect('mongodb://localhost/27017/',{useNewUrlParser:true},function (err,dbvar) {
        if (err) throw err

        var coll=dbvar.db("TodoListDB");
        coll.collection('todo').remove(req,true,function(err,data){
            if (err) throw err

            console.log('1 Document deleted');
            dbvar.close();
        })
        dbvar.close();
    })
}