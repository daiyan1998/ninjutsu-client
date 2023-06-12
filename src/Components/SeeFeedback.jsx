import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
const SeeFeedback = ({ feedback }) => {
  const [open, setOpen] = useState(false);
  console.log(feedback);

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
          {!feedback ? `Admin didn't give feedback` : feedback}
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
