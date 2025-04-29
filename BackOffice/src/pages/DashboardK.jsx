import { useState, useEffect } from 'react';
import { Button, TextField, FormControlLabel, Checkbox } from '@mui/material';
import Page from '@layout/Page';
import Statistics from '@widgets/Statistics';
import styled from 'styled-components';

const DashboardK = () => {
    const [ressources, setRessources] = useState([]);
    const [newRessource, setNewRessource] = useState({
        name: '',
        type: '',
        quantity: '',
        usage: { inUse: 0, available: 0, maintenance: 0 },
        image: '',
    });
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/ressources/getressources')
            .then((res) => res.json())
            .then((data) => setRessources(data))
            .catch((err) => console.error('Erreur lors du chargement des ressources :', err));
    }, []);

    const handleSubmit = (e) => {console.log("aa")
        e.preventDefault();
        fetch('http://localhost:5000/ressources/addressource', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRessource),
        })
            .then((res) => res.json())
            .then((data) => {
                setRessources([...ressources, data]);
                setShowForm(false);
                setNewRessource({
                    name: '',
                    type: '',
                    quantity: '',
                    usage: { inUse: 0, available: 0, maintenance: 0 },
                    image: '',
                });
            })
            .catch((err) => console.error('Erreur lors de l\'ajout :', err));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (['inUse', 'available', 'maintenance'].includes(name)) {
            setNewRessource({
                ...newRessource,
                usage: {
                    ...newRessource.usage,
                    [name]: parseInt(value),
                },
            });
        } else {
            setNewRessource({ ...newRessource, [name]: value });
        }
    };

    return (
        <Page title="Dashboard">
            <Button variant="outlined" color="primary" onClick={() => setShowForm(!showForm)} style={{ marginBottom: 20 }}>
                ➕ Ajouter une ressource
            </Button>

            {showForm && (
                <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
                    <h3>Nouvelle ressource</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Nom"
                            name="name"
                            variant="standard"
                            fullWidth
                            value={newRessource.name}
                            onChange={handleChange}
                            required
                            style={{ marginBottom: '16px' }}
                        />
                        <TextField
                            label="Type"
                            name="type"
                            variant="standard"
                            fullWidth
                            value={newRessource.type}
                            onChange={handleChange}
                            required
                            style={{ marginBottom: '16px' }}
                        />
                        <TextField
                            label="Quantité"
                            name="quantity"
                            type="number"
                            variant="standard"
                            fullWidth
                            value={newRessource.quantity}
                            onChange={handleChange}
                            required
                            style={{ marginBottom: '16px' }}
                        />
                        <TextField
                            label="En service"
                            name="inUse"
                            type="number"
                            variant="standard"
                            fullWidth
                            value={newRessource.usage.inUse}
                            onChange={handleChange}
                            style={{ marginBottom: '16px' }}
                        />
                        <TextField
                            label="Disponible"
                            name="available"
                            type="number"
                            variant="standard"
                            fullWidth
                            value={newRessource.usage.available}
                            onChange={handleChange}
                            style={{ marginBottom: '16px' }}
                        />
                        <TextField
                            label="Maintenance"
                            name="maintenance"
                            type="number"
                            variant="standard"
                            fullWidth
                            value={newRessource.usage.maintenance}
                            onChange={handleChange}
                            style={{ marginBottom: '16px' }}
                        />
                        <TextField
                            label="URL image"
                            name="image"
                            variant="standard"
                            fullWidth
                            value={newRessource.image}
                            onChange={handleChange}
                            style={{ marginBottom: '16px' }}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="tandc"
                                    checked={newRessource.tandc || false}
                                    onChange={handleChange}
                                    color="primary"
                                    sx={{ padding: 0.5, '& .MuiSvgIcon-root': { fontSize: 20 } }}
                                />
                            }
                            label="I agree with the T&C"
                            style={{ marginBottom: '16px' }}
                        />

                        <Button type="submit" variant="outlined" fullWidth color="primary">
                            Ajouter
                        </Button>
                        <Button
                            type="button"
                            onClick={() => setShowForm(false)}
                            variant="outlined"
                            fullWidth
                            color="secondary"
                            style={{ marginTop: '10px' }}
                        >
                            Annuler
                        </Button>
                    </form>
                </div>
            )}

            {ressources.map((res) => (
    <div key={res._id || res.reference}>
        <Statistics
            title={res.name || "Nom non disponible"}
            image={res.image || "/default-image.jpg"}  
            data={{
                type: res.type || "Type inconnu",  // Valeur par défaut
                value: res.quantity ? res.quantity.toString() : "0",  // Vérification de quantity
                text: `En service : ${res.usage?.inUse || 0}, Disponible : ${res.usage?.available || 0}, Maintenance : ${res.usage?.maintenance || 0}`,  // Utilisation de "?."
            }}
        />
    </div>
))}

        </Page>
    );
};

export default DashboardK;
