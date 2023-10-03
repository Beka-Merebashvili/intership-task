import { AiOutlinePlus } from "react-icons/ai"
import Modal from "./Modal"
import { useState } from "react"

export default function AddUser() {
    const [modalOpen , setModalOpen] = useState<boolean>(false);

    return (
        <div>
            <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
                Add new user <AiOutlinePlus size={16} />
            </button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    )
}