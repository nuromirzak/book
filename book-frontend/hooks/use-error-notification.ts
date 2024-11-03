import {useToast} from "@/hooks/use-toast";
import {useEffect} from "react";

interface Props {
  isError: boolean;
  title: string;
}

export function useErrorNotification({
  isError,
  title,
}: Props) {
  const {toast} = useToast();

  useEffect(() => {
    if (isError) {
      toast({title, variant: "destructive"});
    }
  }, [isError, title, toast]);
}
