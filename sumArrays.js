function currying(...nums1) {
  return (...nums2) => {
    return (...nums3) => {
      let all = [...nums1, ...nums2, ...nums3];
      let sum = 0;

      for (let i = 0; i < all.length; i++) {
        if (typeof all[i] == "number") {
          sum += all[i];
        } else {
          for (let j = 0; j < all[i].length; j++) {
            sum += all[i][j];
          }
        }
      }
      return sum;
    }
  }
}

console.log(currying(2, [12, 5])(2, [3, 3])(5));