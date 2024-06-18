import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import checkAuth from "../auth/checkAuth";

function EditPost() {
    const { postId } = useParams();
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [expiry_date, setExpiryDate] = useState('');
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        axios.get(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            headers: { 'Authorization': `Bearer ${user.token}` }
        })
        .then(response => {
            const { name, company, expiry_date } = response.data;
            setName(name);
            setCompany(company);
            setExpiryDate(expiry_date);
        })
        .catch(error => {
            console.error('Error fetching post:', error);
            // Handle error appropriately (e.g., display a message to the user)
        });
    }, [postId, user.token]);

    function updatePost() {
        axios.post(`https://medicalstore.mashupstack.com/api/medicine/${postId}`, {
            name: name,
            company: company,
            expiry_date: expiry_date
        }, {
            headers: { 'Authorization': `Bearer ${user.token}` }
        })
        .then(response => {
            alert(response.data.message);
            navigate('/blog/posts');
        })
        .catch(error => {
            console.error('Error updating post:', error);
            // Handle error appropriately (e.g., display a message to the user)
        });
    }

    return (
        <div style={{ backgroundColor: "#ADD8E6", minHeight: "100vh", padding: "20px 0" }}>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-center">Edit Med</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => { setName(event.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input
                                type="text"
                                className="form-control"
                                value={company}
                                onChange={(event) => { setCompany(event.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Expiry Date</label>
                            <input
                                type="date"
                                className="form-control"
                                value={expiry_date}
                                onChange={(event) => { setExpiryDate(event.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary float-right" onClick={updatePost}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkAuth(EditPost);
