import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from 'ka-table';
import { deleteRow } from 'ka-table/actionCreators';
import { DataType } from 'ka-table/enums';

import { Modal, Button } from 'react-bootstrap';

const DeleteRow = ({ dispatch, rowKeyValue }) => {
  const domain = process.env.BACKEND_URL;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    fetch(`${domain}/api/deletecategory/${rowKeyValue}`, {
      method: 'DELETE'
    }).then(() => {
      dispatch(deleteRow(rowKeyValue));
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
          <Modal.Title>Eliminar categoría</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Estás seguro de eliminar la categoría?</p>
          <p>Si eliminas una categoría, también eliminarás todos los platos que contiene.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirmed}>
            Eliminar categoría
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};



export const Category_food_table = (props) => {

     const domain = process.env.BACKEND_URL;
     const params = useParams()
     const [Categories, setCategories] = useState([]);
     useEffect(() => {
       fetch(`${domain}/api/foodcategories/${params.webName}`)
       .then(response => {
           return response.json()
       }).then(data =>{
           console.log(data)
           setCategories([...data.result])
       })
   }, [])
  
  
  
  
  
    return (
      <Table
        columns={[
          { key: 'name', field: 'name', title: 'Categorias', dataType: DataType.String },
          { key: ':delete', width: 70, style: { textAlign: 'center' } },
        ]}
        data={Categories}
        rowKeyField={'id'}
        childComponents={{
          cellText: {
            content: (props) => {
              switch (props.column.key) {
                case ':delete': return <DeleteRow {...props} />;
              }
            }
          }
        }}
      />
    );
  };
  