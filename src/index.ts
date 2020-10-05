import { gitlab } from './lenses';

const main = async () => {
  const client = gitlab();
  const konrad = await client.getUser('konrad-szychowiak');
  const p = await client.getUserRepos(konrad.id);
  console.log(p);
};

main();
