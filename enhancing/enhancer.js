module.exports = {
  repair,
  succeed,
  fail,
  // get,
};

function repair(item) {
  // if (!item) item = 'sword'
  item = {
    ...item,
    durability:100
  }
  return { ...item };
}

function succeed(item) {
  // if (!item) item = 'sword'
  // if (!enhancement) enhancement=12
  if (item.enhancement >= 20) return { ...item }
  item = {
    ...item,
    enhancement: item.enhancement+1
  }
  return { ...item }
}

function fail(item) {
  if (item.enhancement >= 20) return { ...item }
  item = {
    ...item,
    enhancement: item.enhancement-1
  }
  return { ...item }
}



// function get(item) {
//   return { ...item };
// }

// console.log(repair('sword'))
// console.log(fail('sword'))



