import Banner from "./components/Banner";
import FeaturedItems from "./components/FeaturedItems";
import Navbar from "./components/Navbar";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { ApiProvider } from '@reduxjs/toolkit/query/react'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <main className="min-h-screen bg-[#FCFCFD]">
          <div className="max-w-[1358px] mx-auto">
            <Navbar />
            <Banner />
            <FeaturedItems />
          </div>
        </main>
      </ApiProvider>
    </Provider>
  )
}

export default App;
