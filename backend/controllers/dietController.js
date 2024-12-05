const UserHealthInfo = require('../Database/dietSchema');

exports.getUserHealthInfo = async (req, res) => {
    //get profile info
    try{
        const nid = req.body.nid;

        if(!nid)
        {
            return res.status(400).json({success: false, error:'NID is required'});
        }
    
        const healthInfo = await UserHealthInfo.findOne({nid});
    
        if(!healthInfo)
        {
            return res.status(404).json({success: false, error:'No user found'});
        }
    
        res.status(200).json({success:true, data:healthInfo});
    }
    catch(err)
    {
        console.log("error fetching profile info");
        res.status(500).json({ success: false, error: 'Internal server error for fetching profile info' });
    }
   
};

exports.insertUserHealthInfo = async (req, res) => {
    //update profile info
    try {
        const { nid, height, weight, age, duration } = req.body;

        // Validate required fields
        if (!nid || height == null || weight == null || age == null || duration == null) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the NID is already in use
        const existingUser = await UserHealthInfo.findOne({ nid });
        if (existingUser) {
            return res.status(400).json({ message: 'NID already exists' });
        }

        // Create a new user health info document
        const userHealthInfo = new UserHealthInfo({
            nid,
            height,
            weight,
            age,
            duration,
        });

        // Save the document to the database
        const savedInfo = await userHealthInfo.save();

        return res.status(201).json({
            message: 'User health info added successfully',
            data: savedInfo,
        });
    } catch (error) {
        console.error('Error adding user health info:', error);
        return res.status(500).json({
            message: 'Server error',
            error: error.message,
        });
    }
};
