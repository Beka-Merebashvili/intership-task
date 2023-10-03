interface ModalProps {
    modalOpen: boolean
    setModalOpen: (open : boolean) => void;
}

export default function Modal(props : ModalProps) {
    return (
        <dialog  className={`modal ${props.modalOpen ? "modal-open" : ""}`}>
  <div className="modal-box">
    <form method="dialog">
      <button onClick={() => props.setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Add User</h3>
   <form className="flex flex-col gap-2">
    <label>name <input type="text" /></label>
    <label>mail<input type="text" /></label>
    <label>city<input type="text" /></label>
    <button className="btn" type="submit">add</button>
   </form>
  </div>
</dialog>
    )
}