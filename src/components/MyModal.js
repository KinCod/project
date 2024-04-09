import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import React,{useState} from "react";

const MyModal = (props) => {
    //modal
  const [openModal, setOpenModal] = useState(false);
  const [name, setname] = useState('');

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              New Story Board
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Storyboard Name" />
              </div>
              <TextInput
                id="name"
                placeholder="Storyboard"
                value={name}
                onChange={(event) => setname(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyModal;
