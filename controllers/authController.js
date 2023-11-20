import volunteerModel from "../Model/volunteerModel.js";

// METHOD:POST || REGISTER VOLUNTEER
const registerVolunteerController = async (req, res) => {
  try {
    const { name, email, phone, location, language, availability } = req.body;
    // validation
    if (!name) {
      return res.send({ messgae: "Name is Required" });
    }
    if (!email) {
      return res.send({ messgae: "Email is Required" });
    }
    if (!phone) {
      return res.send({ messgae: "Phone Number is Required" });
    }
    if (!location) {
      return res.send({ messgae: "Location is Required" });
    }
    if (!language) {
      return res.send({ messgae: "Spoken Language is Required" });
    }
    if (!availability) {
      return res.send({ messgae: "Available Days is Required" });
    }

    // checking if the volunteer has already been registered
    const existingVolunteer = await volunteerModel.findOne({ email });
    if (existingVolunteer) {
      return res.status(200).send({
        success: false,
        message: "Volunteer Already Registered",
      });
    }
    // registering volunteer
    const volunteer = await new volunteerModel({
      name,
      email,
      phone,
      location,
      language,
      availability,
    }).save();

    return res.status(200).send({
      success: true,
      message: "Registration Successful",
      volunteer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export { registerVolunteerController };
