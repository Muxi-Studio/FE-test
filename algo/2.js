/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    try{
        const [res1,res2]=Promise.all([promise1,promise2])
        return re1 + re2
    }
    catch(error){
        throw error
    }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
