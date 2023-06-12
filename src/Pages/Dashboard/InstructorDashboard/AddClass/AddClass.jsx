import { useForm } from "react-hook-form";
import Heading from "../../../Shared/Heading/Heading";
import { Card, Input, Button } from "@material-tailwind/react";
import useAuth from "../../../../Hooks/useAuth";
import useFetchLink from "../../../../utils/useFetchLink";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const url = useFetchLink();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data:", data);
    fetch(`${url}/instructorClass`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Class Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <Heading heading={"ADD YOUR CLASS"}></Heading>
      <Card color="transparent" shadow={false}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 ">
          <div className="mb-4 flex flex-col gap-8">
            <Input
              size="lg"
              label="Instructor Name"
              readOnly={true}
              value={user?.displayName}
              {...register("instructorName")}
            />
            <Input
              size="lg"
              label="Instructor Email"
              readOnly={true}
              value={user?.email}
              {...register("instructorEmail")}
            />
            <Input
              required
              size="lg"
              label="Class Name"
              {...register("className")}
            />
            <Input
              required
              type="url"
              size="lg"
              label="Class Image URL"
              {...register("classImg")}
            />
            <div className="flex gap-3">
              <Input
                required
                type="number"
                size="lg"
                label="Available Seats "
                {...register("availableSeats", { valueAsNumber: true })}
              />
              <Input
                required
                type="number"
                size="lg"
                label="Price"
                {...register("price", { valueAsNumber: true })}
              />
            </div>
            <input
              className="hidden"
              defaultValue={"pending"}
              {...register("status")}
              size="lg"
              label=""
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Add
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddClass;
