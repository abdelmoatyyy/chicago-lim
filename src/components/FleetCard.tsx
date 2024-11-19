"use clinet";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
interface FleetCardProps {
  title: string;
  imageUrl: string;
}
export default function FleetCard({ title, imageUrl }: FleetCardProps) {
  return (
    <Card
      className="w-56"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardHeader
        floated={false}
        className="h-80"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <img src={imageUrl} alt="profile-picture" />
      </CardHeader>
      <CardBody
        className="text-center"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {title}
        </Typography>
      </CardBody>
      <CardFooter
        className="flex justify-center gap-7 pt-2"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        s{" "}
        <Button
          color="amber"
          variant="gradient"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
