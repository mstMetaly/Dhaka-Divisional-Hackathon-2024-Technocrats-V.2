const userProfile = require('../Database/models');

exports.getProfileInfo = async (req, res) => {
    //get profile info
    try{
        const nid = req.body.nid;

        if(!nid)
        {
            return res.status(400).json({success: false, error:'NID is required'});
        }
    
        const profile = await userProfile.findOne({nid});
    
        if(!profile)
        {
            return res.status(404).json({success: false, error:'No user found'});
        }
    
        res.status(200).json({success:true, data:profile});
    }
    catch(err)
    {
        console.log("error fetching profile info");
        res.status(500).json({ success: false, error: 'Internal server error for fetching profile info' });
    }
   
};

exports.updateProfileInfo = async (req, res) => {
    //update profile info
};