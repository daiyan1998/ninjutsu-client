import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const SeeFeedback = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div>
      <Button onClick={handleOpen}>See Feedback</Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader></DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Ok</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default SeeFeedback;
