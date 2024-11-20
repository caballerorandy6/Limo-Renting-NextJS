import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { VehicleProps } from "@/lib/interfaces";
import { getVehicles } from "@/components/my-components/ride/GetVehicles";
//import { costTrip } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const RidePrice = async () => {
  const vehicles = await getVehicles();

  return (
    <div className="space-y-4">
      {vehicles.map(
        //incluir pricePerHour y pricePerMile, miles y hours
        ({ id, name }: VehicleProps) => (
          <Card key={id}>
            <CardHeader>
              {/* Extraer millas y horas de viaje a travez de la API de Google Maps */}
              {/* <CardTitle>{costTrip(miles, pricePerMile, hours, pricePerHour)}</CardTitle> */}
            </CardHeader>
            <CardContent>
              <Button>Reserve {name}</Button>
            </CardContent>
            <CardFooter>
              <Link href="#" className="text-blue-500 hover:text-blue-600 ">
                Send me a Quote
              </Link>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
};

export default RidePrice;
