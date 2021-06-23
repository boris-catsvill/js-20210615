/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
// export const pick = (obj, ...fields) => {
//
// };

export const pick = (obj, ...fields) => {
  const newObj = {};
  const arrayFields = fields[0];

  const arrayData = Object.entries(obj);
  for (const field of arrayFields) {
    for (const key of arrayData)
      if (field === key[0]) newObj[field] = key[1];
  }
  return { ...newObj };
};
