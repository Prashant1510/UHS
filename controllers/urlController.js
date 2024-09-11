import crypto from "crypto";
import Url from "../models/url.js"; 
import QRCode from "qrcode";

// Hash generation function to change original url to hash
const generateHash = (url) => {
  return crypto.createHash('sha256').update(url).digest('hex').slice(0, 10);
};


// POST controller for hashing the url
export const hashUrl = async (req, res) => {
  const { url,maxAccess } = req.body;
  const hash = generateHash(url);
  const newHashedUrl = `http://localhost:3001/api/${hash}`;


  try {
    const newUrl = new Url({
      originalUrl: url,
      hash,
      clickCount: 0,
      maxAccess: maxAccess || Infinity
    });
    await newUrl.save();
    // Generatign the qr code for the hashed url
    QRCode.toDataURL(newHashedUrl,(err,qrCodeData)=>{
        if(err){
            console.error("Error in generating QR code : ",err);
            return res.status(500).json({ error: "Failed to generate QR code" });
        }
        return res.status(200).json({
            hashedUrl: newHashedUrl,
            qrCode: qrCodeData 
        });
    });
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
        if(urlData.clickCount >= urlData.maxAccess){
            return res.status(403).json({error:"Sorry, Access limit reached for this URL"})
        }
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
