import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const finalResponses = {};

  await Promise.allSettled([uploadPhoto(), createUser()]).then((result) =>
    result.map((ele, index) => {
      if (index === 0) {
        if (ele.status === 'fulfilled') finalResponses.photo = ele.value;
        else finalResponses.photo = null;
      } else if (index === 1) {
        if (ele.status === 'fulfilled') finalResponses.user = ele.value;
        else finalResponses.user = null;
      }
    }),
  );
  return finalResponses;
}
