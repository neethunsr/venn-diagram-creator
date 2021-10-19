import React from 'react';
import Venn from './venn';

function App() {

  return (
    <div className="App">
      <h1>Venn Diagram Creator</h1>
      <Venn />
      
      {/* <VennDiagram
      height={300}
      width={300}
      data={[
        { key: ['A'], data: 12 },
        { key: ['B'], data: 12 },
        { key: ['A', 'B'], data: 2 }
      ]}
    /> */}
    </div>
  );
}

export default App;
