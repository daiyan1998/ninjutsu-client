import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useFetchLink from "../utils/useFetchLink";
import axios from "axios";
import { useForm } from "react-hook-form";

const FeedbackModal = ({ name, id }) => {
  const [open, setOpen] = useState(false);
  const url = useFetchLink();

  const handleOpen = () => setOpen(!open);
  // React Hook form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .patch(`${url}/instructorClass/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data, id);
    handleOpen();
  };
  return (
    <div>
      <span onClick={handleOpen}>Feedback</span>
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleSubmit(onSubmit)} action="">
          <div className="flex items-center justify-between">
            <DialogHeader>
              Feedback to <span className="text-red-400 ml-2">{name}</span>
            </DialogHeader>
            <XMarkIcon className="mr-3 h-5 w-5" onClick={handleOpen} />
          </div>
          <DialogBody divider>
            <div className="grid gap-6">
              <Textarea
                {...register("feedback", { required: true })}
                label="Message"
              />
            </div>
          </DialogBody>
          <DialogFooter on className="space-x-2">
            <Button variant="outlined" color="red" onClick={handleOpen}>
              close
            </Button>
            <Button type="submit" variant="gradient" color="green">
              send feedback
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </div>
  );
};

export default FeedbackModal;
