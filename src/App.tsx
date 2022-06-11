import { SWRConfig } from 'swr';
import axiosClient from './api/repository';
import OverallLayout from './pages/control/OverallLayout';
function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 500,
        fetcher: (resource: string) =>
          axiosClient.get(resource).then((res) => res.data),
        provider: () => new Map()
      }}
    >
      <OverallLayout />
    </SWRConfig>
  );
}

export default App;
