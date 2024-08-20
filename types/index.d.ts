interface ItemCardProps extends ModalFun {
  title: string;
  description: string;
  icon: string;
}

interface ModalFun {
  openModal: () => void;
}
