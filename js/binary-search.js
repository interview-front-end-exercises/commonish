/**
 * Sort an array using the binary search method
 * 
 *  -   Basically, keep working to the middle of
 *      the array until we find what we are looking 
 *      for
 *   
 * @param {*} nums array of items
 * @param {*} key item to search for
 * @returns boolean
 */
const binaryFindWithRecursion = (nums, key) => {
    
    /** 
     * This method only works on a sorted array
     */
    nums.sort((a, b) => {
        return a - b;
    });

    /** Get the middle index value in the array, use
     * Math.floor() to round down to the nearest int
     */
    const middleIndex = Math.floor(nums.length / 2);

    /** if the middle area item is the key, then we're done searching*/
    if (nums[middleIndex] === key) {
        return `number ${key} found`;

    /** last item in the array, still not the key we're looking for */    
    } else if (nums.length === 1 && nums[0] !== key) {
        return `number ${key} not found`;

        /** 
         * if the value of the middle item is greater than the key,
         * then we know the key we're looking for is to the right
         * of the middleIndex value, so remove all items from the 
         * start of the array to the middle item
         * 
         * [1, 3, 4, 8(key), 9(middleIndex), 11, 23, 86, 99] => [1, 3, 4, 8(key)]
         */
    } else if (nums[middleIndex] > key) {
        debugger
        return binaryFindWithRecursion(nums.splice(0, middleIndex), key);

        /**
         * if the value of the middle item is less than the key,
         * then we know the key we're looking for is to the left
         * of the middleIndex value, sore remove all items from
         * the middle item to the end of the array
         */
    } else if (nums[middleIndex] < key) {
        return binaryFindWithRecursion(nums.splice(middleIndex), key);
    }
}

const arr = [3,4,99,86,1,8,23,9,11];

// console.log('binary find,', binaryFindWithRecursion(arr, 8));

const te = (ar, find) => {

    ar.sort((a,b) => {
        return a -b;
    });

    let middleIdx = Math.floor(ar.length / 2);

    for (let i = 0; i < ar.length; i++) {

        if (ar[middleIdx] === find) {
            return true;
        }

        if (ar.length === 1 && ar[middleIdx] !== find) {
            return false;
        }

        if (ar[middleIdx] > find) {
            return te(ar.splice(0, middleIdx), find);
        } else {
            return te(ar.splice(middleIdx), find);
        }
    }

}

console.log(te(arr, 88));