import DashBoard from '../models/dashboard.model.js';

export const getAllUser = async (req, res) => {
  try {
    const data = await DashBoard.find()
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'Data not found' })
    }
    return res.status(200).json({ data })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ message: 'An error occurred' })
  }
}

export const getuserDataByName = async (req , res) => {
  const { name } = req.params
  try {
    if(!name) {
      throw new Error("Name parmeter required")
    }
    const data = await DashBoard.find({name : name})
    if(!data || data.length === 0) {
      return res.status(404).json({message: 'User not found'})
    }
    return res.status(200).json({ data })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ message: 'An error occurred' })
  }
}


export const updateUser = async (req, res) => {
  const { originalEmail, ...updatedData } = req.body;

  try {
    const updatedUser = await DashBoard.findOneAndUpdate(
      { email: originalEmail },
      { $set: updatedData },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User doesn't exist" });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating user', error: error.message });
  }
};

