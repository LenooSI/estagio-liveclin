import { promises as fsPromises } from 'fs';

export async function writeToFile(
  text: string,
  directory: string,
  filename: string,
) {
  const filePath = await generateFilePath(directory, filename);
  await fsPromises.writeFile(filePath, text, 'utf8');
}

export async function generateFilePath(rootDirectory: string, key: string) {
  const canAccess = await fsPromises
    .access(rootDirectory)
    .then(() => true)
    .catch(() => false);

  if (!canAccess) {
    await fsPromises.mkdir(rootDirectory);
  }

  return `${rootDirectory}/${key}`;
}
