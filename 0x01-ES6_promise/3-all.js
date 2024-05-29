import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.allSettled([uploadPhoto(), createUser()])
    .then((results) => {
      const photoInfo = results[0].value.body;
      const userInfo = results[1].value;

      console.log(`${photoInfo} ${userInfo.firstName} ${userInfo.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
