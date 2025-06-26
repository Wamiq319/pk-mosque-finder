interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {title && <h2 className="modal-title">{title}</h2>}
        {children}
        <button onClick={onClose} className="modal-close">
          ×
        </button>
      </div>
    </div>
  );
}
