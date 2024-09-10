import crypto from "crypto";
import Url from "../models/url.js"; // Assuming you have a URL model in mongoose

// Hash generation function to change original url to hash
const generateHash = (url) => {
  return crypto.createHash('sha256').update(url).digest('hex').slice(0, 10);
};

// POST controller for hashing the url
export const hashUrl = async (req, res) => {
  const { url,maxAccess } = req.body;
  const hash = generateHash(url);

  try {
    const newUrl = new Url({
      originalUrl: url,
      hash,
      clickCount: 0,
      maxAccess: maxAccess || Infinity
    });
    await newUrl.save();
    res.status(200).json({ hashedUrl: `http://localhost:5000/api/${hash}` });
  } catch (error) {
    console.error("Error creating hashed URL:", error);
    res.status(500).json({ error: "Failed to hash the URL" });
  }
};

// GET controller for redirecting via hash
export const redirectUrl = async (req, res) => {
  const { hash } = req.params;

  try {
    const urlData = await Url.findOne({ hash });

    if (urlData) {
      // Increment click count
      urlData.clickCount++;
      await urlData.save();

      res.redirect(urlData.originalUrl);
    } else {
      res.status(404).json({ error: "URL not found" });
    }
  } catch (error) {
    console.error("Error in redirecting:", error);
    res.status(500).json({ error: "Failed to redirect" });
  }
};
