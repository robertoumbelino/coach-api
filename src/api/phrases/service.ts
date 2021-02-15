import phrases from '~/phrases/depressions.json'

/**
 * Get a random
 */
export const getRandomPhrase = async () => {
  /**
   * Random phrase index.
   */
  const randomIndex = Math.floor(Math.random() * phrases.length) + 0

  /**
   * Randomize phrase.
   */
  const phrase = phrases[randomIndex]

  /**
   * Get wallpaper web image.
   */
  const wallpaperWeb = 'https://picsum.photos/1024/576'

  return { phrase, wallpaperWeb }
}
