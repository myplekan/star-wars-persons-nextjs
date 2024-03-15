'use client';

import Flow from '../components/Flow';
import { ReactFlowProvider } from 'reactflow';
import { Person } from '../types/person';
import { Starship } from '../types/starship';

interface Props {
  person: Person;
  starships: Starship[];
}

const FlowProvider: React.FC<Props> = ({ person, starships }) => {
  return (
    <div style={{ height: '90vh' }}>
      <ReactFlowProvider>
        <Flow person={person} starships={starships} />
      </ReactFlowProvider>
    </div>
  );
};

export default FlowProvider;