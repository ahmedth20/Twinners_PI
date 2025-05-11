// styles/stylesP.js
const styleP = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: '1rem',
  },
  container: {
    width: '100%',
    height: '100%',
    maxWidth: '1400px',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%',
    margin: '0 auto',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.75rem',
    fontWeight: '500',
    fontSize: '1.2rem',
    color: '#333',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  input: {
    padding: '1.2rem',
    fontSize: '1.2rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    boxSizing: 'border-box',
  },
  currency: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '1.2rem',
    color: '#333',
  },
  cardElement: {
    padding: '1.2rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  submitButton: {
    padding: '1.2rem',
    fontSize: '1.2rem',
    backgroundColor: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default styleP;
