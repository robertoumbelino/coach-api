import axios from 'axios'

/**
 * NOT USED.
 * @deprecated
 */

/**
 * Phrase file name.
 */
const PHRASE_FILE_NAME = 'phrase.txt'
const WALLPAPER_WEB_FILE_NAME = 'wallpaper-web.jpg'

/**
 * Base url.
 */
const BASE_URL =
  'https://api.github.com/repositories/338679846/contents/src/phrases/depressions'

/**
 * Raw base url.
 */
const RAW_BASE_URL =
  'https://raw.githubusercontent.com/robertoumbelino/coach-api/master/src/phrases/depressions'

/**
 * Get a random
 * @deprecated
 */
export const getRandomPhrase = async () => {
  /**
   * Find tree.
   */
  const treeURL = `${BASE_URL}`
  const treeResponse = await axios.get(treeURL)

  /**
   * Get tree.
   */
  const tree = treeResponse.data

  /**
   * Random tree index.
   */
  const randomIndex = Math.floor(Math.random() * tree.length) + 0

  /**
   * Randomize tree.
   */
  const { name: phraseFolder } = tree[randomIndex]

  /**
   * Get phrase.
   */
  const phraseURL = `${RAW_BASE_URL}/${phraseFolder}/${PHRASE_FILE_NAME}`
  const phraseResponse = await axios.get(phraseURL)

  /**
   * Get phrase.
   */
  const phrase = phraseResponse.data

  /**
   * Get wallpaper web image.
   */
  const wallpaperWeb = `${RAW_BASE_URL}/${phraseFolder}/${WALLPAPER_WEB_FILE_NAME}`

  return { phrase, wallpaperWeb }
}
