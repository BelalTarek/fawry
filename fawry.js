module.exports = function (RED) {
    "use strict";
    var apiClient = require('./client')
    
   
    // var PetAPi = new apiClient.PetApi();

    // PetAPi.sayed.call("mostafa" , (error, data, response) => {
    //     console.log('error =>>>>> ', error)
    //     console.log('data =>>>>> ', data)
    //     console.log('response =>>>>> ', response)
    // })

    // var reflectionPetAPi = new apiClient['PetApi']();
    // reflectionPetAPi['getPet']
    // var apiClient = new apiClient.;
    // var petFunctions = Object.getOwnPropertyNames(PetAPi).filter(item => typeof PetAPi[item] === 'function')
    // console.log('petFunctions =>>>>> ', petFunctions)
   
    
    function MongoNode(n) {
        RED.nodes.createNode(this, n);
        this.baseUrl = n.baseUrl;
        this.port = n.port;
        this.name = n.name;
    }

    RED.nodes.registerType("fawryClient-config", MongoNode, {
        credentials: {
            user: { type: "text" },
            password: { type: "password" }
        }
    });

    function MongoOutNode(n) {
        // console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeeere')
        // RED.nodes.createNode(this,n);
        // this.collection = n.collection;
        // this.mongodb = n.mongodb;
        // this.payonly = n.payonly || false;
        // this.upsert = n.upsert || false;
        // this.multi = n.multi || false;
        // this.operation = n.operation;
        // this.mongoConfig = RED.nodes.getNode(this.mongodb);
        // // console.log("node credentials on => ", this.mongoConfig)
        // this.status({fill:"grey",shape:"ring",text:RED._("mongodbstatus.connecting")});
        // var node = this;
        // var noerror = true;

        // var connectToDB = function() {
        //     MongoClient.connect(node.mongoConfig.url, function(err, db) {
        //         if (err) {
        //             node.status({fill:"red",shape:"ring",text:RED._("mongodb.status.error")});
        //             if (noerror) { node.error(err); }
        //             noerror = false;
        //             node.tout = setTimeout(connectToDB, 10000);
        //         }
        //         else {
        //             node.status({fill:"green",shape:"dot",text:RED._("mongodb.status.connected")});
        //             node.clientDb = db;
        //             noerror = true;
        //             var coll;
        //             if (node.collection) {
        //                 coll = db.collection(node.collection);
        //             }
        //             node.on("input",function(msg) {
        //                 if (!node.collection) {
        //                     if (msg.collection) {
        //                         coll = db.collection(msg.collection);
        //                     }
        //                     else {
        //                         node.error(RED._("mongodb.errors.nocollection"),msg);
        //                         return;
        //                     }
        //                 }
        //                 delete msg._topic;
        //                 delete msg.collection;
        //                 if (node.operation === "store") {
        //                     if (node.payonly) {
        //                         if (typeof msg.payload !== "object") {
        //                             msg.payload = {"payload": msg.payload};
        //                         }
        //                         if (msg.hasOwnProperty("_id") && !msg.payload.hasOwnProperty("_id")) {
        //                             msg.payload._id = msg._id;
        //                         }
        //                         coll.save(msg.payload,function(err, item) {
        //                             if (err) {
        //                                 node.error(err,msg);
        //                             }
        //                         });
        //                     }
        //                     else {
        //                         coll.save(msg,function(err, item) {
        //                             if (err) {
        //                                 node.error(err,msg);
        //                             }
        //                         });
        //                     }
        //                 }
        //                 else if (node.operation === "insert") {
        //                     if (node.payonly) {
        //                         if (typeof msg.payload !== "object") {
        //                             msg.payload = {"payload": msg.payload};
        //                         }
        //                         if (msg.hasOwnProperty("_id") && !msg.payload.hasOwnProperty("_id")) {
        //                             msg.payload._id = msg._id;
        //                         }
        //                         coll.insert(msg.payload, function(err, item) {
        //                             if (err) {
        //                                 node.error(err,msg);
        //                             }
        //                         });
        //                     }
        //                     else {
        //                         coll.insert(msg, function(err,item) {
        //                             if (err) {
        //                                 node.error(err,msg);
        //                             }
        //                         });
        //                     }
        //                 }
        //                 else if (node.operation === "update") {
        //                     if (typeof msg.payload !== "object") {
        //                         msg.payload = {"payload": msg.payload};
        //                     }
        //                     var query = msg.query || {};
        //                     var payload = msg.payload || {};
        //                     var options = {
        //                         upsert: node.upsert,
        //                         multi: node.multi
        //                     };
        //                     if (ObjectID.isValid(msg.query._id)) {
        //                         msg.query._id = new ObjectID(msg.query._id);
        //                     }
        //                     coll.update(query, payload, options, function(err, item) {
        //                         if (err) {
        //                             node.error(err,msg);
        //                         }
        //                     });
        //                 }
        //                 else if (node.operation === "delete") {
        //                     coll.remove(msg.payload, function(err, items) {
        //                         if (err) {
        //                             node.error(err,msg);
        //                         }
        //                     });
        //                 }
        //             });
        //         }
        //     });
        // }

        // if (node.mongoConfig) { connectToDB(); }
        // else { node.error(RED._("mongodb.errors.missingconfig")); }

        // node.on("close", function() {
        //     node.status({});
        //     if (node.tout) { clearTimeout(node.tout); }
        //     if (node.clientDb) { node.clientDb.close(); }
        // });
    }
    RED.nodes.registerType("fawryClient", MongoOutNode);



}
