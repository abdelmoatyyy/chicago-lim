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
    <Card className="w-64 h-96 bg-gradient-to-b from-black via-gray-800 to-gray-900 border border-gold text-gold">
      <CardHeader floated={false} className="h-48 relative">
        <img
          src={imageUrl}
          alt="profile-picture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="amber" className="mb-2">
          {title}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Button color="yellow" variant="gradient">
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
