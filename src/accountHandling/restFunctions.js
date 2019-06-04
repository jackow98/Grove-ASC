import {API} from 'aws-amplify'

//Gets record of currently logged in user using rest api
export const getUser = async (currentUserSub) => {
    console.log('calling api');
    return await API.get('groveRestapi', `/items/${currentUserSub}`);
};

//TODO: Remove post functionality, test purposes only
export const postUser = async (user) => {
    console.log('calling api');
    const response = await API.post('groveRestapi', '/items', {
        body: user
    });
    alert(JSON.stringify(response, null, 2));
};

export const postContactForm = async (contents) => {
    console.log('calling api');
    const response = await API.post('groveContactApi', '/items', {
        body: contents
    });
    alert(JSON.stringify(response, null, 2));
};