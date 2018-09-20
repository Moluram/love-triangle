/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let loveTriangles = [];

  for (person of preferences) {
    let triangle = getLoveTriangle([], person, preferences, loveTriangles)

    if (triangle.length > 0 && isTriangle(triangle, preferences)) {
      loveTriangles = loveTriangles.concat(triangle)
    }
  }

  return loveTriangles.length / 3;
};

function getLoveTriangle(triangle, person, preferences, loveTriangles) {

  if (loveTriangles.some(t => {return person === t})) {
    return [];
  }

  triangle.push(person)

  if (triangle.length == 3) {
    return triangle;
  }

  return getLoveTriangle(triangle, preferences[person - 1], preferences, loveTriangles)
}

function isTriangle(triangle, preferences) {
  return triangle[0] != triangle[1] 
      && triangle[1] != triangle[2] 
      && triangle[0] != triangle[2]
      && preferences[preferences[preferences[triangle[0] - 1] - 1] - 1] === triangle[0];
}


