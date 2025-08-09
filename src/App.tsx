import { useRoutes } from "react-router-dom"
import router from "./route"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const client = new QueryClient()
  const route = useRoutes(router);
  return (
    <>
      <div className="w-[1280px] mx-auto  py-7 px-10 text-white">

        <QueryClientProvider client={client}>
          {route}
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </div >
    </>
  )
}

export default App
