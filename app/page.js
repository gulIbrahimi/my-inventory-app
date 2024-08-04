// app/page.js
"use client";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Card, CardContent, Container, IconButton, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { addDoc, collection, db, deleteDoc, doc, getDocs, updateDoc } from '../firebaseConfig';

export default function Home() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddItem = async () => {
    if (itemName && quantity) {
      if (editMode && currentItem) {
        await updateDoc(doc(db, 'items', currentItem.id), { itemName, quantity });
        setEditMode(false);
        setCurrentItem(null);
      } else {
        await addDoc(collection(db, 'items'), { itemName, quantity });
      }
      fetchItems();
      setItemName('');
      setQuantity('');
    }
  };

  const fetchItems = async () => {
    const itemsCollection = collection(db, 'items');
    const querySnapshot = await getDocs(itemsCollection);
    const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setItems(itemsList);
    setFilteredItems(itemsList);
  };

  const handleEdit = (item) => {
    setEditMode(true);
    setCurrentItem(item);
    setItemName(item.itemName);
    setQuantity(item.quantity);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'items', id));
    fetchItems();
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = items.filter(item =>
      item.itemName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Inventory Management System
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h2">Add or Edit Item</Typography>
          <TextField
            label="Item Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <TextField
            label="Quantity"
            variant="outlined"
            fullWidth
            margin="normal"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleAddItem}>
            {editMode ? 'Update Item' : 'Add Item'}
          </Button>
        </CardContent>
      </Card>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearch}
      />
      <List>
        {filteredItems.map(item => (
          <Card key={item.id} variant="outlined" style={{ marginBottom: '16px' }}>
            <CardContent>
              <ListItem
                secondaryAction={
                  <>
                    <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <ListItemText primary={item.itemName} secondary={`Quantity: ${item.quantity}`} />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Container>
  );
}
