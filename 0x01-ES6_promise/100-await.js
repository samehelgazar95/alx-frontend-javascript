import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let finalResponses = {};

  //   await Promise.allSettled([uploadPhoto(), createUser()]).then((result) =>
  //     result.map((ele, index) => {
  //       if (ele.status === 'fulfilled') {
  //         if (index === 0) finalResponses.photo = ele.value;
  //         else if (index === 1) finalResponses.user = ele.value;
  //       } else {
  //         if (index === 0) finalResponses.photo = null;
  //         else if (index === 1) finalResponses.user = null;
  //       }
  //     }),
  //   );

  try {
    const photo = await uploadPhoto();
    console.log(photo);
    const user = await createUser();
    console.log(user);
    finalResponses = { photo, user };
  } catch (err) {
    finalResponses = { photo: null, user: null };
  }

  return finalResponses;
}
