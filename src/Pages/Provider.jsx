import { useParams } from 'react-router-dom';

import { providers } from "../constants";

export function Provider() {
  const { id } = useParams();

  const provider = providers.find((p) => p.id === id);

  console.log('>>', provider, id)
  if (!provider) {
    return <></>;
  }

  return (
    <h1>{provider.name}</h1>
  )
}
