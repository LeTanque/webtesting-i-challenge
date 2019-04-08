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
  if (item.enhancement < 15) {
    item = {
      ...item,
      durability: item.durability-5
    }  
  }
  if (item.enhancement >= 15) {
    item = {
      ...item,
      durability: item.durability-10
    }
  }
  if (item.enhancement > 16) {
    item = {
      ...item,
      enhancement: item.enhancement - 1
    }
  }

  if (item.durability <= 0 || item.enhancement <= 0) item = { ...item, durability: 0, enhancement: 0 }
  

  return { ...item }
}



// function get(item) {
//   return { ...item };
// }

// console.log(repair('sword'))
// console.log(fail('sword'))



