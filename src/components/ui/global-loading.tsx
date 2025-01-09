import React from 'react';
import { Spinner } from './spinner';

function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Spinner className="text-white" size="large" />
    </div>
  );
}

export default LoadingPage;
