const {UserProfile} = require('../Database/models');

exports.getProfileInfo = async (req, res) => {
    //get profile info
    try {
        const phone = req.body.phone;

        if (!phone) {
            return res.status(400).json({ success: false, error: 'Phone is required' });
        }

        const profile = await UserProfile.findOne({ phone });

        if (!profile) {
            return res.status(404).json({ success: false, error: 'No user found' });
        }

        res.status(200).json({ success: true, data: profile });
    }
    catch (err) {
        console.log("error fetching profile info");
        res.status(500).json({ success: false, error: 'Internal server error for fetching profile info' });
    }

};


exports.updateProfileInfo = async (req, res) => {
    try {
        const { phone, name, age, emergencyContact, village, upazilla, postOffice, district, division } = req.body;

        // Validate required field
        if (!phone) {
            return res.status(400).json({ success: false, error: 'Phone is required for updating the profile' });
        }

        // Find the profile and update it
        const updatedProfile = await UserProfile.findOneAndUpdate(
            { phone }, // Filter: Find the document with this phone
            {
                $set: {
                    name,
                    age,
                    emergencyContact,
                    'address.village': village,
                    'address.upazilla': upazilla,
                    'address.postOffice': postOffice,
                    'address.district': district,
                    'address.division': division
                }
            },
            { new: true, runValidators: true } // Options: Return the updated document and validate the changes
        );

        if (!updatedProfile) {
            return res.status(404).json({ success: false, error: 'No user found with the given phone number' });
        }

        return res.status(200).json({
            success: true,
            message: 'User profile updated successfully',
            data: updatedProfile
        });
    } catch (error) {
        console.error('Error updating user profile:', error);
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};
