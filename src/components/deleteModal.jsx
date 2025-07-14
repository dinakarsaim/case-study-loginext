const DeleteModal = ({ user, onCancel, onConfirm }) => {
    return (
        <div className="modal-backdrop">
        <div className="modal">
            <div className="modal-header">
            <h3>Delete User</h3>
            <button className="close-btn" onClick={onCancel}>×</button>
            </div>
            <div className="modal-body">
            Confirm delete <strong>{user.name}</strong>?
            </div>
            <div className="modal-actions">
            <button className="cancel-btn" onClick={onCancel}>Cancel</button>
            <button className="delete-btn" onClick={onConfirm}>Delete</button>
            </div>
        </div>
        </div>
    );
};

export default DeleteModal;