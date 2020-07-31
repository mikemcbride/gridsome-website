
/**
 * Return active or inactive link classes based on url
 *
 * @param {String} activeUrl
 * @param {String} segment
 * @param {String [startsWith|equals]} comparator
 *
 * If the activeUrl matches the segment, we return a set of active link classes
 * If it doesn't, we return the inactive classes
 *
 */
module.exports = function(activeUrl, segment, comparator = 'startsWith') {
  console.log('activeUrl:', activeUrl)
  console.log('segment:', segment)
  console.log('comparator:', comparator)

  const activeClasses = 'text-black dark:text-white border-black dark:border-white'
  const inactiveClasses = 'text-grey-darker hover:text-black dark:text-grey-dark dark-hover:text-white'

  if (comparator === 'equals') {
    return activeUrl === segment ? activeClasses : inactiveClasses
  }

  return activeUrl.startsWith(segment) ? activeClasses : inactiveClasses
}
