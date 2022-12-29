import React , {useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Form.css';

const Form = () => {

  const [name, setName] = useState("");
  localStorage.setItem("key", "value");
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <>
    <div className='d-flex first-div'>
      <div className='shadow w-50 secound-div m-auto d-flex'>
        <form className='m-auto form-style'>
          <input type="text"
                className='mb-2 form-control'
                placeholder="inter id ..."
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className='btn btn-success w-100'>
            submit
          </button>
        </form>
      </div>
    </div>

      
    </>
  );
};

export default Form;