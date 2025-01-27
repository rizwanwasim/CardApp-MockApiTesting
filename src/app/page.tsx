// src/app/page.tsx
'use client';
import React, { useState } from 'react';

export default function Home() {
  const [response, setResponse] = useState<any>(null);
  const handleCardClick = async (id: number) => {
    try {
      const response = await fetch(`/api/cards/${id}`);
      const data = await response.json();
      setResponse({
        status: response.status,
        data: data,
        clickedCard: id,
        timestamp: new Date().toISOString()
      }); 
    } catch (error) {
      console.error('Error:', error);
      setResponse({ 
        status: 'Error', 
        data: { error: 'Failed to fetch data' }, 
        clickedCard: id, 
        timestamp: new Date().toISOString() 
      });
    } 
  }; 
  
  return ( 
  <div className="min-h-screen flex flex-col items-center pt-10"> 
    <h1 className="text-4xl font-bold mb-20">
      Next APP API Testing 
    </h1> 
  <div className="flex justify-center items-center gap-20"> 
    {[1, 2, 3].map((id) => ( 
      <button 
        key={id} onClick={() => handleCardClick(id)}
        data-testid={`card-${id}`}
        className="w-40 h-40 bg-white text-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center text-xl font-semibold border-2 border-gray-200" 
      > 
        Card {id} 
      </button> ))} 
    </div> 
    
    {response && (
      <div className="mt-10 p-6 bg-white text-black rounded-lg shadow-lg max-w-xl w-full mx-4">
        <div className="font-semibold mb-2">
          Status: {response.status} 
        </div>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
          {JSON.stringify(response.data, null, 2)}
        </pre>
        </div> 
      )}
      </div>
      );
    }