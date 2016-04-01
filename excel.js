var parseXlsx = require('excel');
var UserModel = require('./models/userModel');
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ash",function(){
  console.log("Mongo Server connected")
});

var d=[];
var col;
parseXlsx('SampleData.xlsx', function(err, data) {
	if(err) 
		console.log(err);
	else
		
		console.log(data[0].length);

		 for(var i=0;i<data.length;i++)
		 {
		  //console.log(data[i])
		 	var user=new UserModel({
		 			Order_Date:data[i][0],
		 			Region:data[i][1],
		 			Rep_Item:data[i][2],
		 			Units:data[i][3],
		 			Unit_Cost:data[i][4],
		 			Total:data[i][5],

		 	});
				  user.save(function(err,userData){
            	       		if(!err){
            			 	}

            			 })

		// 	    UserModel.update({})	 
		 }
		   
});