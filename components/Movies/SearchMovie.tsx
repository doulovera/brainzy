import Modal from '@components/shared/Modal';

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export default function SearchMovie ({ showModal, setShowModal }: Props) {
  return <Modal title="Add new movie" open={showModal} handleClose={() => setShowModal(false)}>
    hola
  </Modal>;
}
