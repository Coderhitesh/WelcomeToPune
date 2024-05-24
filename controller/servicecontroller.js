const Service = require('../modals/service.modal')

exports.CreateService = async(req,res) => {
    try {
        const {
            name,
            age,
            breast,
            height,
            weight,
            hip,
            city,
            typeofgirl,
            image,
            heading,
            about,
            service
        } = req.body

        if(!name || !age || !breast || !height || !weight || !hip || !city || !typeofgirl || !image || !heading || !about || !service){
            return res.status(400).json({
                success : false,
                message : "Please fill all the fields"
            })
        }

        const newService = new Service({
            name,
            age,
            breast,
            height,
            weight,
            hip,
            city,
            typeofgirl,
            image,
            heading,
            about,
            service
        })

        await newService.save()

        res.status(201).json({
            success : true,
            message : "Service created successfully",
        })

    } catch (error) {
        // console.log(object)
        res.status(500).json({
            success : false,
            message : "Internal server error"
        })
    }
}

exports.GetAllServices = async(req,res) => {
    try {
        const AllService = await Service.find()
        res.status(201).json({
            success : true,
            message : "All Service",
            data : AllService
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "Internal server error"
        })
    }
}

exports.DeleteSingleService = async(req,res) => {
    try {
        const serviceId = req.params.id;
        const result = await Service.deleteOne({_id : serviceId})
        if (result.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "No Service found with the given ID!"
            });
        }

        res.status(200).json({
            success: true,
            message: "Service has been deleted!",
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success : false,
            message : "Internal server error"
        })
    }
}

// exports.deleteAllService = async(req,res) => {
//     try {
//         const deleteData = Service
//         if(!deleteData){
//             return res.status(404).json({
//                 success: false,
//                 message : 'No Service Found'
//             })
//         }

//         await deleteData.remove()

//         res.status(200).json({
//             success: true,
//             message: "Service has been deleted!",
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             success : false,
//             message : "Internal server error"
//         })
//     }
// }

exports.singleService = async (req, res) => {
    try {
        const serviceID = req.params.id
        const serviceData = await Service.findById(serviceID)
        if (!serviceData) {
            res.status(404).json({
                success: false,
                message: "Service not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Here is your Service data",
            data: serviceData
        })
    } catch (error) {
        console.log(error)
    }
}