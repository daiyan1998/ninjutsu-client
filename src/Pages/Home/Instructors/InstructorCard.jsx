import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const InstructorCard = ({ instructor }) => {
  const { name, email, image, position } = instructor;
  return (
    <Card className="w-96 my-9">
      <CardHeader floated={false} className="h-80">
        <img
          className="object-cover h-full w-full"
          src={image}
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
        <Typography className="font-semibold text-gray-600" textGradient>
          {position}
        </Typography>
        <Typography color="blue" textGradient>
          {email}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default InstructorCard;
