import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { kaReducer, Table } from 'ka-table';
import { hideNewRow, saveNewRow, showNewRow, openRowEditors, saveRowEditors, closeRowEditors, deleteRow, rowData } from 'ka-table/actionCreators';
import { DataType } from 'ka-table/enums';
import { Modal, Button } from 'react-bootstrap';





const DeleteModal = ({ show, onHide, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    await onDelete();
    setIsDeleting(false);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Plato</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Estás seguro de eliminar este plato?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" disabled={isDeleting} onClick={onHide}>
          Cancelar
        </Button>
        <Button variant="danger" disabled={isDeleting} onClick={handleDelete}>
          {isDeleting ? 'Eliminando...' : 'Eliminar'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const DeleteRow = ({ dispatch, rowKeyValue }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const params = useParams();
  const domain = process.env.BACKEND_URL;

  const handleDelete = async () => {
    await fetch(`${domain}/api/food/${rowKeyValue}`, {
      method: 'DELETE',
    });
    dispatch(deleteRow(rowKeyValue));
    setShowDeleteModal(false);
  };

  return (
    <>
      <img
        src="https://komarovalexander.github.io/ka-table/static/icons/delete.svg"
        className="delete-row-column-button"
        onClick={() => setShowDeleteModal(true)}
        alt=""
      />
      <DeleteModal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onDelete={handleDelete}
      />
    </>
  );
};
  
  export const Category_food_table = (props) => {
    const domain = process.env.BACKEND_URL;
    const params = useParams();
    const [tableProps, changeTableProps] = useState({
      columns: [
        { key: 'name', field: 'name', title: 'Platos', style: { color: '#707070' }, dataType: DataType.String},
        { key: 'precio', field:'price', title:'precio', style: { color: '#707070' }, dataType: DataType.Number},
        { key: 'description', field:'description', title:'Descripción', style: { color: '#707070' }, dataType: DataType.String},
        { key: ':delete', width: 70, style: { textAlign: 'center' } },
        { key: ':edit', width: 70, style: { textAlign: 'center' } },
        { key: 'addColumn', width: 70, style: { textAlign: 'center' } }
      ],
      data: Foodlist,
      rowKeyField: 'id'
    });
    const categoryid = props.category
    const categoryname = props.name
    const [Foodlist, setFoodlist] = useState([]);
    useEffect(() => {
      // Fetch the initial list of categories from the server
      fetch(`${domain}/api/foodinacategory/${params.webName}/${categoryname}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setFoodlist([...data.result]);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    useEffect(() => {
      changeTableProps({ ...tableProps, data: [...Foodlist] });
      console.log(Foodlist);
    }, [Foodlist]);
    const AddButton = ({ addNewDish }) => {
      const [showModal, setShowModal] = useState(false);
      const [dishData, setDishData] = useState({ name: '', price: 0, description: '' });
      const [name, setName] = useState("");
      const [price, setPrice] = useState("");
      const [description, setDescription] = useState("");
    
      const handleSave = () => {
        addNewDish(name, price, description);
        setShowModal(false);
      };
      return (
        <>
          <div className="plus-cell-button">
            <img
              src="https://komarovalexander.github.io/ka-table/static/icons/plus.svg"
              alt="Add New Row"
              title="Add New Row"
              onClick={() => setShowModal(true)}
            />
          </div>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Añadir un nuevo plato</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='row'>
                <label htmlFor="name">Nombre: </label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className='row'>
                <label htmlFor="price">Precio: </label>
                <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value)} />
               </div>
               <div className='row'>
                <label htmlFor="description">Descripción: </label>
                <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={handleSave} disabled={!name || !price}>
                Añadir
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    };
    const handleAddNewDish = async (name, price, description) => {
      try {
        const web_name = params.webName;
        const categoryid = props.category
        const requestBody = {
          name,
          price,
          description,
          category_id: categoryid,
          web_name: web_name,
      };
        console.log('Request body:', requestBody); // Log the request body
        const response = await fetch(`${domain}/api/food`, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        });
        if (response.ok) {
          const newDishData = await response.json();
          const newDish = {
            id: newDishData.id,
            name: newDishData.name,
            price: newDishData.price,
            description: newDishData.description,
          };
          setFoodlist([...Foodlist, newDish]);
          window.location.reload(); // reload the page
        } else {
          console.error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const handleSelectFood = (food) => {
      console.log(food);
      setSelectedFood(food);
    };
    const EditButton = ({ food, onSelect }) => {
      return (
        <div className="edit-cell-button">
          <img
            src="https://komarovalexander.github.io/ka-table/static/icons/edit.svg"
            alt="Edit Row"
            title="Edit Row"
            onClick={() => {
              onSelect(food);
            }}
          />
        </div>
      );
    };    
    const [selectedFood, setSelectedFood] = useState(null);
    
    const handleSaveChanges = async () => {

      try {
        const web_name = params.webName;
        
        const requestBody = {
          name: selectedFood.name,
          description: selectedFood.description,
          food_id: selectedFood.id,
          price: selectedFood.price,
          web_name: web_name,
        };
        console.log(requestBody)
        const formData = new FormData();
        formData.append('image', selectedFood.image);
        //formData.append('data', JSON.stringify(requestBody));
        const responseImage = fetch(`${domain}/api/image/${selectedFood.id}`, 
        {method: 'PUT', 
        body: formData})
        const response = await fetch(`${domain}/api/food`, {
          method: 'PUT',
          body: JSON.stringify(requestBody),
        });
        
    
        if (response.ok) {
          alert('Plato actualizado!'); 
          setTimeout(() => {
            location.reload();
          }, 400)} 
        else {
          console.error(response.statusText);
        }
      } catch (error) {
        console.error(error);
      }
    };
    

    return (
      <>
        <h3>{categoryname}</h3>
        <Table
          {...tableProps}
          childComponents={{
            headCell: {
              content: props => {
                switch (props.column.key) {
                  case ':delete':
                    return null;
                  case ':edit':
                    return null;
                  case 'addColumn':
                    return <AddButton addNewDish={handleAddNewDish} />
                    ;
                  default:
                    return props.column.title;
                }
              }
            },
            cellText: {
              content: props => {
                switch (props.column.key) {
                  case ':delete':
                    return <DeleteRow {...props} />;
                  case ':edit':
                    return <EditButton food={props.rowData} onSelect={handleSelectFood} />;
                  case 'addColumn': 
                    return null;
                  default:
                    return props.cellData;
                }
              }
            },
            
          }}
          
        />
        {selectedFood && (
  <Modal show={true} onHide={() => setSelectedFood(null)}>
    <Modal.Header closeButton>
      <Modal.Title>Editar Plato</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form>
        <div className="form-group">
          <label htmlFor="foodName">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="foodName"
            value={selectedFood.name}
            onChange={(event) =>
              setSelectedFood({
                ...selectedFood,
                name: event.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodDescription">Descripción</label>
          <input
            type="text"
            className="form-control"
            id="foodDescription"
            value={selectedFood.description}
            onChange={(event) =>
              setSelectedFood({
                ...selectedFood,
                description: event.target.value,
              })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="foodPrice">Precio</label>
          <input
            type="text"
            className="form-control"
            id="foodPrice"
            value={selectedFood.price}
            onChange={(event) =>
              setSelectedFood({
                ...selectedFood,
                price: event.target.value,
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodImage">Foto</label>
          <input
            type="file"
            className="form-control-file"
            id="foodImage"
            onChange={(event) =>
              setSelectedFood({
                ...selectedFood,
                image: event.target.files[0],
              })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="foodAllergens">Alérgenos</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="egg"
              checked={selectedFood.allergens && selectedFood.allergens.egg}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    egg: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="egg">
              Huevo
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="fish"
              checked={selectedFood.allergens && selectedFood.allergens.fish}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    fish: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="fish">
              Pescado
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="peanuts"
              checked={selectedFood.allergens && selectedFood.allergens.peanuts}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    peanuts: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="peanuts">
              Cacahuetes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="soja"
              checked={selectedFood.allergens && selectedFood.allergens.soja}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    soja: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="soja">
              Soja
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="dairy"
              checked={selectedFood.allergens && selectedFood.allergens.dairy}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    dairy: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="dairy">
              Leche
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="nuts"
              checked={selectedFood.allergens && selectedFood.allergens.nuts}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    nuts: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="nuts">
              Frutos Secos
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="celery"
              checked={selectedFood.allergens && selectedFood.allergens.celery}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    celery: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="celery">
              Apio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="mustard"
              checked={selectedFood.allergens && selectedFood.allergens.mustard}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    mustard: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="mustard">
              Mostaza
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="sulphites"
              checked={selectedFood.allergens && selectedFood.allergens.sulphites}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    sulphites: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="sulphites">
              Sultifos
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="mollusks"
              checked={selectedFood.allergens && selectedFood.allergens.mollusks}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    mollusks: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="mollusks">
              Moluscos
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="lupines"
              checked={selectedFood.allergens && selectedFood.allergens.lupines}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    lupines: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="lupines">
              Altramuces
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="gluten"
              checked={selectedFood.allergens && selectedFood.allergens.gluten}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    gluten: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="gluten">
              Gluten
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="crustaceans"
              checked={selectedFood.allergens && selectedFood.allergens.crustaceans}
              onChange={(event) =>
                setSelectedFood({
                  ...selectedFood,
                  allergens: {
                    ...selectedFood.allergens,
                    crustaceans: event.target.checked,
                  },
                })
              }
            />
            <label className="form-check-label" htmlFor="crustaceans">
              Crustáceos
            </label>
          </div>
        </div>
      </form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setSelectedFood(null)}>
        Cerrar
      </Button>
      <Button variant="primary" onClick={handleSaveChanges}>
        Guardar Cambios
      </Button>
    </Modal.Footer>
  </Modal>
)}
    
      </>
    );
  };