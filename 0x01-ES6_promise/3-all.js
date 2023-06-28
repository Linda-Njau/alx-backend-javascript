import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const a = uploadPhoto();
  const b = createUser();
  return promise.all([a, b])
    .then(
      (data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}) ${data[1].lastName}`),
      () => console.log('Signup system offline'),
    );
}
