import Contact from "../models/contact-model.js";

// Contact logic
const contactForm = async (req, res) => {
    try {
        const responce = req.body;
        await Contact.create(responce);
        return res.status(200).json({ msg: "Message send successfully!!" });
    } catch (error) {
        res.status(400).json({ msg: "Failed to send message!!" })
    }
}

export default contactForm;