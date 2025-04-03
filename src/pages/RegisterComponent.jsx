import React, {useEffect, useState} from 'react';
import toast from 'react-hot-toast';

const RegisterComponent = () => {
    const [formData, setFormData] = useState({uName:'', uEmail:'', uPassword:'', uCountry:''});

    const onChangeHandle = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const fetchRegistarion = async () =>{
        try
        {
            const response = await fetch(`http://localhost:9000/api/user/register`, {
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(formData)
            });

            if(response.ok)
                toast("Details has been submitted")

            setFormData({uName:"", uEmail:"", uPassword:"", uCountry:""})
            
        }
        catch(error)
        {
            console.log("Error", error.message);
        }
    }

    const onSubmitHandle = async (e) =>{
        e.preventDefault();

        if (formData.uName == '' || formData.uEmail === '' || formData.uPassword === '' || formData.uCountry === '') {
          toast.error("Both blanks are required");
          return;
        }

        await fetchRegistarion(formData);
    }

    return (
        <div className='w-100 d-flex justify-content-center'>
            <form method="get" onSubmit={onSubmitHandle} className='w-25 my-5'>
                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-person-military-pointing"></i></span>
                    <input type="text" name='uName' onChange={onChangeHandle} className="form-control" placeholder="Name" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text">@</span>
                    <input type="text" name='uEmail' onChange={onChangeHandle} className="form-control" placeholder="Username" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                    <input type="text" name='uPassword' onChange={onChangeHandle} className="form-control" placeholder="Password" />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text"><i className="fa-solid fa-earth-oceania"></i></span>
                    <select className="form-select" name='uCountry' onChange={onChangeHandle}>
                        <option defaultValue=''>--Select Country--</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Japan">Japan</option>
                        <option value="South Korea">South Korea</option>
                    </select>
                </div>

                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
        </div>
    )
}

export default RegisterComponent
