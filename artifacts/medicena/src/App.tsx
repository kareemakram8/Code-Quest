import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { PatientProvider } from "@/context/PatientContext";

import LoginPage from "@/pages/LoginPage";
import DepartmentsPage from "@/pages/DepartmentsPage";
import QueuePage from "@/pages/QueuePage";
import PatientDetailPage from "@/pages/PatientDetailPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={LoginPage} />
      <Route path="/departments" component={DepartmentsPage} />
      <Route path="/queue/:department" component={QueuePage} />
      <Route path="/patient/:id" component={PatientDetailPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PatientProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </PatientProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
