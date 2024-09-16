import mongoose from "mongoose";
import users from "../models/Auth.js";

export const getallusers = async (req, res) => {
  try {
    const allusers = await users.find();
    const alluserdetails = [];
    allusers.forEach((user) => {
      alluserdetails.push({
        _id: user._id,
        name: user.name,
        about: user.about,
        tags: user.tags,
        joinedon: user.joinedon,
      });
    });
    res.status(200).json(alluserdetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }
};

export const updateprofile = async (req, res) => {
  const { id: _id } = req.params;
  const { name, about, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("User unavailable");
  }

  try {
    // if (!name || !about || !Array.isArray(tags)) {
    //   return res.status(400).send("Invalid data"); // Added validation
    // }
    const updateprofile = await users.findByIdAndUpdate(
      _id,
      {
        $set: { name: name, about: about, tags: tags },
      },
      { new: true }
    );

    // if (!updateprofile) {
    //   return res.status(404).send("User not found");
    // }

    res.status(200).json(updateprofile);
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }
};
