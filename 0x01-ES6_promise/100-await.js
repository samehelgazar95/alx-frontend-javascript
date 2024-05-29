import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const finalResponses = {};

  await Promise.allSettled([uploadPhoto(), createUser()]).then((result) =>
    result.map((ele, index) => {
      if (index === 0) {
        if (ele.status != 'fulfilled') finalResponses.photo = null;
        else finalResponses.photo = ele.value;
      } else if (index === 1) {
        if (ele.status != 'fulfilled') finalResponses.user = null;
        else finalResponses.user = ele.value;
      }
    }),
  );
  return finalResponses;
}
