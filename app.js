const Twit = require('twit');
const axios = require('axios');
const config = require('./config');
const T = new Twit(config);

const getFollowerCount = () => {
    const params = {
        screen_name: 'andygoldstein00'
    }
    T.get('users/show', params, (err, data, response) => {
        if(err){
            console.log(err)
        } else {
            console.log(data)
        }

    })
}
getFollowerCount()
console.log('everything good')