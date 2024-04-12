import React from 'react';
import Gallery from './components/Gallery';
import data from './data';

function App() {
    return (
        <div>
            {/* Render the Gallery component with the provided data */}
            <Gallery data={data} />
        </div>
    );
}

export default App;
