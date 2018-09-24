/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = 3
  let lovers = [];
  let counter = 0;

  preferences.forEach(person => {
    if (!lovers[person]) {
      let triangle = getLoveTriangle(person, preferences, length)

      if (triangle[0] != triangle[length - 1] && preferences[triangle[length - 1] - 1] === triangle[0]) {
        counter++;
        triangle.forEach(t => lovers[t] = true)
      }
    }
  })

  return counter;
};

function getLoveTriangle(person, preferences, length, triangle = []) {
  triangle.push(person)

  return triangle.length === length ? triangle : 
          getLoveTriangle(preferences[person - 1], preferences, length, triangle)
}