const Twit = require('twit');
const axios = require('axios');
const config = require('./config');
const T = new Twit(config);
const Numbers = require('number-to-emoji')

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
            const displayName = data.name;
            const followersCount = +displayName.match(/\d/g).join();

            if(followersCount !== currentFollowersCount){
                currentFollowersCount = Numbers.toEmoji(currentFollowersCount);
                updateDisplayName()
            }

        }

    })
}
setInterval(getFollowerCount, 20000)

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