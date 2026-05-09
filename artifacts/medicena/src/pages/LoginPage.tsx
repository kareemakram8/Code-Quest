import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Activity, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLocation("/departments");
  };

  return (
    <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center bg-background p-6">
      <div className="w-full max-w-[430px] mx-auto flex flex-col items-center space-y-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="h-20 w-20 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
            <Activity className="h-10 w-10 text-white" />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Medicena</h1>
            <p className="text-muted-foreground font-medium">Hospital Queue Coordination</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full"
        >
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                Phone Number / رقم الهاتف
              </label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="01xxxxxxxxx" 
                className="h-14 text-lg"
                data-testid="input-phone"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-semibold rounded-xl"
              data-testid="button-login"
            >
              دخول / Login
            </Button>
          </form>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm text-muted-foreground flex items-center gap-2 justify-center"
        >
          <Stethoscope className="h-4 w-4" />
          <span>Internal Hospital Use Only</span>
        </motion.div>

      </div>
    </div>
  );
}
