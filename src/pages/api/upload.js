import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable({ 
    uploadDir: path.join(process.cwd(), 'public/employee-photo'),
    keepExtensions: true,
    maxFileSize: 10 * 1024 * 1024, 
  });

  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    if (!files.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const uploadedFile = files.file[0];
    const filename = uploadedFile.originalFilename.replace(/\s+/g, '_');
    const filePath = path.join(process.cwd(), 'public/employee-photo', filename);

    fs.renameSync(uploadedFile.filepath, filePath);

    return res.status(200).json({
      message: 'File uploaded successfully',
      fileUrl: `/assets/${filename}`,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return res.status(500).json({ message: 'Error uploading file', error });
  }
}
