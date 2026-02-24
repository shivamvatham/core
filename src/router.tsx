import { createBrowserRouter } from 'react-router';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'my-info', element: <div><h2 className="text-2xl font-bold">My Info</h2></div> },
      { path: 'people', element: <div><h2 className="text-2xl font-bold">People</h2></div> },
      { path: 'team-management', element: <div><h2 className="text-2xl font-bold">Team Management</h2></div> },
      { path: 'project-setup', element: <div><h2 className="text-2xl font-bold">Project Setup</h2></div> },
      { path: 'hiring', element: <div><h2 className="text-2xl font-bold">Hiring</h2></div> },
      { path: 'report', element: <div><h2 className="text-2xl font-bold">Report</h2></div> },
      { path: 'settings', element: <div><h2 className="text-2xl font-bold">Settings</h2></div> },
    ],
  },
]);
