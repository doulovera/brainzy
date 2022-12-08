import Button from '@components/shared/button';
import Input from '@components/shared/input';
import Modal from '@components/shared/Modal';

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function SearchMovie ({ showModal, setShowModal }: Props) {
  return (
    <Modal title="Add new Movie or Show" open={showModal} handleClose={() => setShowModal(false)}>
      <div className="flex flex-col gap-8 my-4">
        <div className="flex gap-2">
          <div className="w-4/5">
            <Input
              name="title"
              type="text"
              placeholder="Enter the title"
            />
          </div>
          <div>
            <Input
              name="type"
              type="text"
              placeholder="Type"
            />
          </div>
        </div>
        <Button>Search</Button>
      </div>
    </Modal>
  );
}
