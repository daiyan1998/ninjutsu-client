import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const InstructorCard = ({ instructor }) => {
  const { instructorName, instructorEmail, image, position } = instructor;
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
          {instructorName}
        </Typography>
        <Typography className="font-semibold text-gray-600" textGradient>
          {position}
        </Typography>
        <Typography color="blue" textGradient>
          {instructorEmail}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default InstructorCard;
