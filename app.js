const Twit = require('twit');
const axios = require('axios');
const config = require('./config');
const T = new Twit(config);

let currentFollowersCount;

const getFollowerCount = () => {
    const params = {
        screen_name: 'andygoldstein00'
    }
    T.get('users/show', params, (err, data, response) => {
        if(err){
            console.log(err)
        } else {
            //console.log(data)
            currentFollowersCount = data.followers_count;
            console.log(currentFollowersCount)
            updateDisplayName()
        }

    })
}
getFollowerCount()

const updateDisplayName = () => {
    const params = {
        name: `Muckitymuck | ${currentFollowersCount} Followers`
    }
    T.post('account/update_profile', params, (err, data, response) => {
        if(err){
            console.log(err)
        } else {
            console.log('display name updated')
        }
    })
}
console.log('everything good')