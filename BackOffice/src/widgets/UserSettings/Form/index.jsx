import { StyledForm, Container } from 'widgets/UserSettings/style';
import { Input } from 'UI/Field';
import DropFiles from 'components/DropFiles';
import Btn from 'UI/Btn';
import LabeledFormInput from 'UI/LabeledFormInput';
import DateInput from 'components/MaskedInputs/Date';
import Phone from 'components/MaskedInputs/Phone';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import useNotistack from 'hooks/useNotistack';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Form = ({ type }) => {
  const { notify } = useNotistack('Your changes have been successfully saved.', 'success');
  const hint = 'Drag image here or click to select file';

  const userId = useSelector((state) => state.auth?.user?.id); // Make sure this is the correct path
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Combine state for simplicity
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthday: '',
    profileImage: null,
  });
  const [, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/getprofile/${userId}`); // Use userId
        if (!response.ok) {
          throw new Error('Error fetching user data');
        }
        const data = await response.json();
        setUserData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          phone: data.phone || '',
          birthday: data.birthday || '',
          profileImage: data.picture || null,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
        notify(); // Optional: Add failure notification
      }
    };

    if (userId) fetchUser();
  }, [userId]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData((prevState) => ({
      ...prevState,
      profileImage: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    // Append form data
    Object.entries(userData).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      await axios.put('http://localhost:5000/users/editprofile', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      notify();
    } catch (err) {
      console.error('Error updating profile:', err);
      alert('Error updating profile.');
    }
  };

  return (
    <StyledForm action="#" method="post" id={`settings_${type}`} onSubmit={handleSubmit}>
      <div className="wrapper">
        {/* Profile image preview */}
        <div className="profile-image-container" style={{ marginBottom: '20px' }}>
          {userData.profileImage ? (
            <img
              src={URL.createObjectURL(userData.profileImage)}
              alt="Profile"
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />
          ) : (
            <div>No Image Available</div> // Fallback if no image is set
          )}
        </div>

        <DropFiles multiple={false} type="image">
          <i className="icon icon-image" aria-label={hint} />
          <span className="hint">{hint}</span>
          <input type="file" onChange={handleFileChange} />
        </DropFiles>

        <Container>
          <LabeledFormInput
            id={`${type}FirstName`}
            title="First Name"
            placeholder="First Name"
            value={userData.firstName}
            onChange={(e) =>
              setUserData((prevState) => ({ ...prevState, firstName: e.target.value }))
            }
          />
          <LabeledFormInput
            id={`${type}LastName`}
            title="Last Name"
            placeholder="Last Name"
            value={userData.lastName}
            onChange={(e) =>
              setUserData((prevState) => ({ ...prevState, lastName: e.target.value }))
            }
          />

          <LabeledFormInput
            id={`${type}Email`}
            title="Email"
            placeholder="example@domain.com"
            value={userData.email}
            onChange={(e) =>
              setUserData((prevState) => ({ ...prevState, email: e.target.value }))
            }
          />

          <LabeledFormInput
            id={`${type}Phone`}
            title="Phone"
            placeholder="+1(000)-000-00-00"
            customInput={
              <Phone
                id={`${type}Phone`}
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prevState) => ({ ...prevState, phone: e.target.value }))
                }
              />
            }
          />

          <LabeledFormInput
            id={`${type}Birthday`}
            title="Birthday"
            placeholder="YYYY-MM-DD"
            customInput={
              <Input
                as={DateInput}
                id={`${type}Birthday`}
                value={userData.birthday}
                onChange={(e) =>
                  setUserData((prevState) => ({ ...prevState, birthday: e.target.value }))
                }
              />
            }
          />
        </Container>
      </div>
      <Btn text="Save" handler={handleSubmit} type="submit" />
    </StyledForm>
  );
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Form;
