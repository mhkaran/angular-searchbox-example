/* istanbul ignore file */

module.exports = {

    save : async (model)=>{
        
        try{
            return  await model.save()
        }
        catch(e){
            console.log(e);
            throw e
        }
    },
    
    search : async (model,query,skip,limit)=>{
       
        try {    
          return await model.find({'name': {'$regex': query}})
          .limit(Number(limit))
          .skip(Number(skip))
          .exec();
        }
        catch(e){
            console.log(e);
            throw e
        }    
    },

    count: async (model,query)=>{
        try {    
             return await model.countDocuments({'name': {'$regex': query}});
        }
        catch(e)
    {
        console.log(e);
        throw e;
    }
    }
}