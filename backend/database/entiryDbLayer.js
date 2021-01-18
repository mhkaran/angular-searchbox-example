/* istanbul ignore file */

const repo = require('./repo');

module.exports= {

    create : async (model)=>
    {
        try
        {
             await repo.save(model);
             return true;
        }
        catch(e)
        {
            throw e;
        }
    },

    search:async(model,query,skip,limit)=>{
        try
        {
            return await repo.search(model,query,skip,limit);
        }
        catch(e)
        {
            throw e;
        }
    },

    count:async(model,query)=>{
        try
        {
            return await repo.count(model,query);
        }
        catch(e)
        {
            throw e;
        }
    }
}

