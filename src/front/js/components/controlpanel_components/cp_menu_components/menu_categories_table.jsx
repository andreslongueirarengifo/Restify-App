import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, kaReducer } from 'ka-table';
import { deleteRow,  } from 'ka-table/actionCreators';
import { DataType } from 'ka-table/enums';

import { Modal, Button, Form } from 'react-bootstrap';

const DeleteRow = ({ dispatch, rowKeyValue }) => {
  const domain = process.env.BACKEND_URL;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    fetch(`${domain}/api/deletecategory/${rowKeyValue}`, {
      method: 'DELETE'
    }).then(() => {
      dispatch(deleteRow(rowKeyValue));
      location.reload()
    });
  };

  const handleDeleteConfirmed = () => {
    handleDelete();
    setShowModal(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <img
        src='https://komarovalexander.github.io/ka-table/static/icons/delete.svg'
        className='delete-row-column-button'
        onClick={handleDeleteClick}
        alt=''
      />

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="caption-text fw-bold">Eliminar categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de eliminar la categoría?</p>
          <p>Si eliminas una categoría, también eliminarás todos los platos que contiene.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button className="red-button" onClick={handleDeleteConfirmed}>
            Eliminar categoría
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};




export const Menu_categories_table = (props) => {
  const domain = process.env.BACKEND_URL;
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch the initial list of categories from the server
    fetch(`${domain}/api/foodcategories/${params.webName}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCategories([...data.result]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddCategory = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const newCategoryName = form.elements.categoryName.value;
    const payload = {
      web_name: params.webName, // add the web_name field
      name: newCategoryName
    };
    // Send a POST request to add the new category to the API
    fetch(`${domain}/api/createcategory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add category');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Reload the page after adding a new category
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
    <>
      <Table
        columns={[
          {
            key: 'name',
            field: 'name',
            title: 'Categorias',
            style: { color: '#352970' },
            dataType: DataType.String,
          },
          {
            key: ':delete',
            width: 70,
            style: { textAlign: 'center' },
          },
          {
            key: 'addColumn',
            style: { width: 53 },
          },
        ]}
        data={categories}
        rowKeyField={'id'}
        validation={({ column, value }) => {
          if (column.key === 'column1') {
            return value ? '' : 'value must be specified';
          }
        }}
        childComponents={{
          cellText: {
            content: (props) => {
              switch (props.column.key) {
                case ':delete':
                  return <DeleteRow {...props} />;
              }
            },
          },
          headCell: {
            content: (props) => {
              if (props.column.key === 'addColumn') {
                return (
                  <div className="plus-cell-button">
                    <img
                      src="https://komarovalexander.github.io/ka-table/static/icons/plus.svg"
                      alt="Add New Row"
                      title="Add New Row"
                      onClick={() => setShowModal(true)}
                    />
                  </div>
                );
              }
            },
          },
        }}
      />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
          <Modal.Title className="caption-text fw-bold">Crear Nueva categoria</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddCategory}>
          <Modal.Body>
            <Form.Group controlId="categoryName">
              <Form.Label>Nombre de categoría</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button className="accept-button" type="submit">
              Crear categoría
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
