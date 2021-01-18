const mapping = require('../entity/mapping');
const modelDatabaseLayer = require('../database/entiryDbLayer');

module.exports ={
    search : async (query,skip,limit)=>{
        try{
           let entity = await mapping.employee();
           let [data,count] = await Promise.all([
               modelDatabaseLayer.search(entity,query,skip,limit),
                modelDatabaseLayer.count(entity,query)
           ]);

            return {data:data,count:count};
        }
        catch(e){
            console.log('error',e)
            throw e;
        }
    },
    create : async  (obj)=>{
        try{            
            let entity = await mapping.employee(obj)
            return await modelDatabaseLayer.create(entity);                           
        }
        catch(e){
            throw e;
        }
    }
}