import React from 'react'
import { Spinner } from '../spinner';

interface LoadingOverlay{
  isOpen: boolean,
}

export default function LoadingOverlay <T,>({isOpen}:LoadingOverlay) {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 z-50">
          {/* <Loader2 className="animate-spin text-blue-500 text-3xl mb-4" width={100} height={100} strokeWidth={1}/> */}
          <Spinner/>
      </div>
    ) 
}
