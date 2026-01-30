import crudModel from "../models/crud.model.js";


const create = async (req,res)=>{
    try{
        const data = req.body;

        const existdata = await crudModel.findOne(data);
        if(existdata){
            console.log("data already exist");
            return res.json({message:"data already exist"});
            
            
        };

        await crudModel.create(data);
        res.json({message:data})
        console.log(data);

    }catch(err){
        res.status(500).json({mes:err});
    };
};

const read = async (req,res)=>{
    try{
        const readdata = await crudModel.find();
        res.json(readdata);
    }catch(err){
       res.json({"mes":err})
    };
};

const update = async (req,res)=>{
    try{
        const updatedata = await crudModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    if(!updatedata){
        return res.json({message:"data not found"})
    };
    
    res.send(updatedata);
    console.log(updatedata);
    
}catch(err){
    res.json({message:err})
    console.log(err);
    
}
};

const del = async (req,res)=>{
    try{const deletedata = await crudModel.findByIdAndDelete(req.params.id);

    if(!deletedata){
        res.json({message:"data not found"})
    }

        res.json({message:"Data deleted"})
    }catch(err){
        res.json({message:err});
    }
};

export {read,create,update,del};