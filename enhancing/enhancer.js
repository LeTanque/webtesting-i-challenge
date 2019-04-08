module.exports = {
  repair,
  succeed,
  fail,
  // get,
};

function succeed(item, enhancement) {
  if (!item) item = 'sword'
  if (!enhancement) enhancement=12
  item = {
    item:item,
    durability:100,
    enhancement:enhancement
  }
  if (item.enhancement > 10 && item.enhancement < 21) return { ...item };
  return false;
}

function fail(item, enhancement) {
  if (!item) item = 'sword'
  if (!enhancement) enhancement=9
  item = {
    item:item,
    durability:100,
    enhancement:enhancement
  }
  if (item.enhancement >= 0 && item.enhancement < 11) return { ...item };
  return false;
}


function repair(item) {
  if (!item) item = 'sword'
  item = {
    item:item,
    durability:100,
    enhancement:0
  }
  return { ...item };
}

// function get(item) {
//   return { ...item };
// }

// console.log(repair('sword'))
console.log(fail('sword'))