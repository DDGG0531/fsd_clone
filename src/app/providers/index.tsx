import { BrowserRouter } from 'react-router-dom';
import { Router } from './RouterProvider';
import { QueryClientProvider } from './QueryClientProvider';

export function Provider() {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
