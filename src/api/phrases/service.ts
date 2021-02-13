import * as fs from 'fs'
import * as path from 'path'

/**
 * Phrase file name.
 */
const PHRASE_FILE_NAME = 'phrase.txt'
const WALLPAPER_WEB_FILE_NAME = 'wallpaper-web.jpg'

/**
 * Root path.
 */
const rootPath = path.join(__dirname, '..', '..')

/**
 * Get a random
 */
export const getRandomPhrase = () => {
  const directoryPath = path.join(rootPath, 'phrases', 'depressions')
  const folders = fs.readdirSync(directoryPath)

  const randomIndex = Math.floor(Math.random() * folders.length) + 0

  const folderPath = folders[randomIndex]

  const filePath = path.join(directoryPath, folderPath)
  const phrasePath = path.join(filePath, PHRASE_FILE_NAME)

  const phrase = fs.readFileSync(phrasePath, { encoding: 'utf-8' })
  const webImage = path.join(filePath, WALLPAPER_WEB_FILE_NAME)

  return { phrase, webImage }
}
