import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data.json');
  const fileData = fs.readFileSync(filePath);
  const jsonData = JSON.parse(fileData);

  res.status(200).json(jsonData);
}
