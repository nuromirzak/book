import {useState, useRef} from "react";
import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {AlertCircle, ScanLine} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";

interface Props {
  onScan: (barcode: string) => void;
}

export function BarcodeScannerModal({onScan}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleScan = (event: React.FormEvent) => {
    event.preventDefault();
    const input = inputRef.current;
    if (!input) {
      return;
    }
    const barcode = input.value;
    if (barcode) {
      setIsOpen(false);
      input.value = "";
      onScan(barcode);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto">
          <ScanLine className="mr-2 h-4 w-4"/>
          Сканерлеу
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-4/5">
        <DialogHeader>
          <DialogTitle>Штрих-кодты сканерлеу</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Alert>
            <AlertCircle className="h-4 w-4"/>
            <AlertTitle>Сканерлеуге дайын</AlertTitle>
            <AlertDescription>
              Штрих-кодты қазір сканерлеңіз. Сканер белсенді және енгізуді күтуде.
            </AlertDescription>
          </Alert>
          <form onSubmit={handleScan}>
            <input
              ref={inputRef}
              type="text"
              onBlur={() => {
                return inputRef.current && inputRef.current.focus();
              }}
              className="sr-only"
              aria-label="Hidden barcode input"
            />
            <button type="submit" className="sr-only">
              Жіберу
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}