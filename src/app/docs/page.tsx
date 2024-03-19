import { CircleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Page() {
  return (
    <div className="grid grid-rows-2 items-center justify-center">
      <Alert variant="destructive">
        <CircleAlert className="size-4" />
        <AlertTitle>WIP</AlertTitle>
        <AlertDescription>
          Ich baue gerade ein theme für neue nicht kopierte RWTH layouts.
        </AlertDescription>
      </Alert>
      <span className="my-96"></span>
      <img
        alt="still waiting"
        src={
          "https://media1.tenor.com/m/bZpnYV69q7kAAAAC/kyriostsahs-lonely.gif"
        }
        height={400}
        width={600}
      ></img>
    </div>
  );
}
