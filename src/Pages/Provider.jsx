import { useParams } from 'react-router-dom';

import { Blocks } from "../components/Blocks"
import { providers } from "../constants";

export function Provider() {
  const { id } = useParams();

  const provider = providers.find((p) => p.id === id);

  if (!provider) {
    return <></>;
  }

  return (
    <Blocks>
      <a href={provider.url} target='_blank' rel='noreferrer'>
        <h1 className='text-4xl'>{provider.name}</h1>
      </a>
    </Blocks>
  )
}
