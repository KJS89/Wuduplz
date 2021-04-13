import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

//add a user into firebase store
const addUsers = async(UserId)=>{
    var token = await getToken();
    firestore().collection('users').doc(UserId).set({notificationTokens:token})
    .then(() => {
      console.log('User added!');
    }).catch(()=>{
        console.log('failed to add!')
    });
}

//get the token of this device and associate the device token with the user logged in 
const getToken = async()=>{
    var token = await messaging().getToken()
    return token
}


export default{
    addUsers:addUsers,
    getToken:getToken,

    deleteUser:(UserId)=>{
        firestore().collection('users').doc(UserId).delete()
        .then(() => {
            console.log('User deleted!');
                     });
    },
    
    checkUser: async (UserId) => {
       var result = await firestore().collection('users').doc(UserId).get()
       if(result['_exists']){
            return result['_data']['notificationTokens']
       }
       return result['_exists']
      
    },


}