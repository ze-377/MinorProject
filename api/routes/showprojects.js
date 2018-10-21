
var dbshow = require('../models/projects')


///////////////////Show projects///////////
 
exports.findProject = (req,res) => {

    dbshow.find({},(err,data)=>{
        if(err){
            res.json({
                success : false,
                msg : "Not found"
            })
        }
        else{
            res.json({
                success: true,
                msg :"Project Departments",
                data : data
            })
        }

    })
}

////////////////////////////ENTER DATA /////////////////////////////
exports.enterProjects = (req,res)=>{
if(!req.body.projectDept||!req.body.projectName||!req.body.projectCode||!req.body.projectDetails)   {
  
    res.json({
        success:false,
        msg : "Please give all the requried inputs"
             })

       }
  else{
      dbshow.findOne({projectCode: req.body.projectCode},(err,enteredDATA)=>{

        if (err){
            res.json({

                success: false,
                msg : "Som"
            })
        }
        
             else if(!enteredDATA || enteredDATA == null){
                new dbshow ({
                    projectDept : req.body.projectDept,
                    projectCode : req.body.projectCode,
                    projectName :req.body.projectName,
                    projectDetails : req.body.projectDetails
                }).save((err,savedData)=>{
                    if(err){
                        res.json({
                            success : false,
                            msg : "can't be saved"                            
                        })
                    }
                    else {
                        res.json({
                            success : true,
                            msg : "project is successfully entered",
                            data : savedData
                        })
                    }

                })
            }
            else {
                res.json({
                    success: false,
                    msg: "You have already registered."
                })
            }
 


      })
  }     
}
