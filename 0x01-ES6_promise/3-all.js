import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.allSettled([uploadPhoto(), createUser()]).then((results) => {
    const photoInfo = results[0].value.body;
    const userInfo = results[1].value;

    console.log(photoInfo, userInfo.firstName, userInfo.lastName);
  });
}
