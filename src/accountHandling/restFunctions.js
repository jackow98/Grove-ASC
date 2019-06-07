import {API} from 'aws-amplify'

//Gets record of currently logged in user using rest api
export const getUser = async (currentUserSub) => {
    console.log('calling api');
    return await API.get('groveMembersApi', `/items/${currentUserSub}`);
};