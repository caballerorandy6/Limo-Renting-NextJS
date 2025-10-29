//Store
import { useOpenDialogStore } from "@/stores/openDialogStore";

//Shadcn Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

//Interfaces
const MyDialog = ({ children }: { children: React.ReactNode }) => {
  const { openDialog, setOpenDialog } = useOpenDialogStore();

  return (
    <Dialog open={openDialog} onOpenChange={(isOpen) => setOpenDialog(isOpen)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white font-sans flex justify-between">
            Vehicle Details
          </DialogTitle>
          <DialogDescription className="text-white tracking-wide leading-relaxed text-lg">
            {children}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MyDialog;
