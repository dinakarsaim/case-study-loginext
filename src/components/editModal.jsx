import { useState } from "react";

const EditModal = (props) => {
    const { user, onClose, onSave } = props;
    const [editData, setEditData] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website,
    });

    function changeInfo (e) {
        const { name, value } = e.target;
        setEditData((prev) => ({ ...prev, [name]: value }));
    };

    function submitInfo (e) {
        e.preventDefault();
        onSave({ ...user, ...editData });
    };

    return (
        <div className="modal-backdrop">
        <div className="modal">
            <div className="modal-header">
                <h3>Edit</h3>
                <button className="close-btn" onClick={onClose}>×</button>
            </div>
            <form onSubmit={submitInfo}>
            {["name", "email", "phone", "website"].map((field) => (
                <div className="form-group" key={field}>
                <label>
                    <span className="required">*</span> {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                    type="text"
                    name={field}
                    value={editData[field]}
                    onChange={changeInfo}
                    required
                />
                </div>
            ))}
            <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
                <button type="submit" className="ok-btn">OK</button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default EditModal;