import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { MD3LightTheme, MD3Theme, PaperProvider } from 'react-native-paper';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: 0,
    },
  },
});
const theme: MD3Theme = {
  ...MD3LightTheme, // or MD3DarkTheme
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
  },
};

export const wrapper = ({ children }: { children: ReactNode }) => (
  <PaperProvider theme={theme}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </PaperProvider>
);
export const paperWrapper = ({ children }: { children: ReactNode }) => (
  <PaperProvider theme={theme}>{children}</PaperProvider>
);
