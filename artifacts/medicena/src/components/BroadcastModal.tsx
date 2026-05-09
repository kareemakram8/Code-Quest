import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Drawer, 
  DrawerContent, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerDescription,
  DrawerFooter,
  DrawerClose
} from "@/components/ui/drawer";
import { useToast } from "@/hooks/use-toast";
import { Send, Megaphone } from "lucide-react";

interface BroadcastModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PRESET_MESSAGES = [
  "Doctor delayed 20 minutes",
  "Room 3 is now available",
  "Queue paused — please hold",
  "Resume normal queue"
];

export function BroadcastModal({ open, onOpenChange }: BroadcastModalProps) {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSend = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Broadcast Sent",
      description: "Message delivered to all staff on floor.",
    });
    
    setMessage("");
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-w-[430px] mx-auto">
        <DrawerHeader>
          <DrawerTitle className="flex items-center gap-2 text-xl">
            <Megaphone className="h-5 w-5 text-primary" />
            Broadcast Update
          </DrawerTitle>
          <DrawerDescription>
            Send a real-time notification to all staff in this department.
          </DrawerDescription>
        </DrawerHeader>
        
        <div className="p-4 space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Quick Select</h4>
            <div className="flex flex-wrap gap-2">
              {PRESET_MESSAGES.map((preset, i) => (
                <Button
                  key={i}
                  variant="secondary"
                  className="rounded-full justify-start h-10 px-4"
                  onClick={() => setMessage(preset)}
                  data-testid={`btn-preset-${i}`}
                >
                  {preset}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Custom Message</h4>
            <Textarea
              placeholder="Type message..."
              className="min-h-[100px] resize-none text-base p-3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              data-testid="textarea-broadcast"
            />
          </div>
        </div>

        <DrawerFooter className="pt-2">
          <Button 
            className="h-14 text-lg font-semibold w-full rounded-xl gap-2" 
            onClick={handleSend}
            disabled={!message.trim()}
            data-testid="btn-send-broadcast"
          >
            <Send className="h-5 w-5" />
            Send to All Staff
          </Button>
          <DrawerClose asChild>
            <Button variant="outline" className="h-12 w-full rounded-xl" data-testid="btn-cancel-broadcast">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
