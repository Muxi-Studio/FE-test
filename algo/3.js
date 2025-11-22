/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0, right = height.length-1;
    let  water = 0,max=0
    // water = (right - left) * Math.max(height[left], height[right])
    while (left < right) {
        water = (right - left) * Math.min(height[left], height[right])
        if (height[left] < height[right]) {
            right--
        }
        else { left++ }
        max=Math.max(water,max)
    }
    return max
};
