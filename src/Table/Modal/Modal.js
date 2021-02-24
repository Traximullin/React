import React from 'react';
import { useForm } from 'react-hook-form';
import './Modal.css';

export default function Modal({ addNewProduct }) {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => addNewProduct({ ...data, stocked: false });

  const [isOpen, setOpen] = React.useState(false);
  const styles = {
    button: {
      margin: '10px',
    },
  };
  return (
    <div>
      <button
        style={styles.button}
        onClick={(e) => {
          e.preventDefault();
          setOpen((isOpen) => !isOpen);
        }}>
        Add product
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Add product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="category"
                ref={register({ required: true })}
                placeholder="category"
              />
              <input
                name="name"
                ref={register({ required: true })}
                placeholder="name"
              />
              <input
                name="price"
                ref={register}
                defaultValue="100"
                placeholder="price"
              />
              <br />
              <input type="submit" />
              &nbsp;
              <button onClick={() => setOpen((isOpen) => !isOpen)}>&times;</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
