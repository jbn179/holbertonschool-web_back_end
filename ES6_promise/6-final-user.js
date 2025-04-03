import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = [];
  await signUpUser(firstName, lastName)
    .then((value) => result.push({ status: 'fulfilled', value }))
    .catch((error) => result.push({ status: 'rejected', value: error }));
  await uploadPhoto(fileName)
    .then((value) => result.push({ status: 'fulfilled', value }))
    .catch((error) => result.push({ status: 'rejected', value: error }));
  return result;
}
