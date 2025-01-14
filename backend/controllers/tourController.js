import Tour from '../models/Tour.js'

export const createTour = async(req, res) =>{
    const newTour = new Tour (req.body)

    try{
        const savedTour = await newTour.save()
        res.status(200).json({success:true, message:'Successfully created',
            data:savedTour
        })

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to create. Try again.',
            data:savedTour
        })
    }
};

export const updateTour = async(req, res)=>{
    const id=req.params.id
    try{
        const updatedTour=await Tour.findByIdAndUpdate(id, {
            $set:req.body
        }, {new:true})

        res.status(200).json({success:true, message:'Successfully updated',
            data:updatedTour
        })

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to update. Try again.',
            data:updatedTour
        })
    }
}

export const deleteTour = async(req, res)=>{
    const id=req.params.id
    try{
        await Tour.findByIdAndDelete(id);

        res.status(200).json({success:true, message:'Successfully deleted.',
        })

    } catch(err) {
        res.status(500).json({success:false, message:'Failed to delete. Try again.',
        })
    }
}

export const getSingleTour = async(req, res)=>{
    const id=req.params.id
    try{
        const tour=await Tour.findById(id);

        res.status(200).json({success:true, message:'Successful',
        })

    } catch(err) {
        res.status(500).json({success:false, message:'Not found',
        })
    }
}

export const getAllTour = async(req, res)=>{
    const page=parseInt(req.query.page);
    console.log(page);
    try{
        const tours=await Tour.find({}).skip(page*8).limit(8);

        res.status(200).json({success:true, count: tours.length, message:'Successful', data:tours
        })

    } catch(err) {
        res.status(404).json({success:false, message:'Not found',
        })
    }
}

export const getTourBySearch = async(req, res) => {
    const city = new ReqExp(req.query.city, 'i')
    const distance = parseInt (req.query.distance)
    const maxGroupSize= parseInt(req.query.maxGroupSize)

    try {
        const tours=await Tour.find({ city, distance:{$gte:distance},
        maxGroupSize:{$gte:maxGroupSize}})
        res.status(200).json({success:true, message:'Successful', data:tours
        })
    } catch(err) {
        res.status(404).json({success:false, message:'Not found',
        })
    }
}