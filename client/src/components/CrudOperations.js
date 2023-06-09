import { Fragment } from 'react';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import UpdateModal from './UpdateModal';









function CrudOperations () {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[name, setName] = useState('');
  const[address, setAddress] = useState('');
  const[city, setCity] = useState('');
  const[country, setCountry] = useState('');
  const[pincode, setPincode] = useState('');
  const[score, setScore] = useState('');
  const[result, setResult] = useState('');
  
  
  
  


  
  const[data,setData] = useState([]);
  
  
  const getData = () =>{
      axios.get('http://localhost:8080/getall').then((response)=>{
      const result = response.data;    
      setData(result)
      }).catch((error)=>{
          console.log(error);
      })
    };
  
    useEffect(()=> {
      getData();
  },[]);
  

  const handleDelete=(name)=>
  {  const url2 = `http://localhost:8080/delete/${name}`;
 
if(window.confirm("Sure you want to delete this SAT RESULT?")===true)
{
   axios.delete(url2).then((response)=>{
    const result = response;
    if(result ===200)
    {

        getData();
    }
        });
}
  }


  const handleAdd=()=>
  {
      handleShow();
  }
 

  const handleGetRank=(name)=>
  {
    const url3 = `http://localhost:8080/getRank/${name}`;
    axios.get(url3).then((response)=>{
      console.log(response)
        const result = response;
      if(result.status === 200)
      {
  
          getData();
        alert(" Rank of "+name+" is "+result.data);
        console.log(result.data);
      }
    });
  }

  const handleSaveBackend=()=>
    {
     const url = 'http://localhost:8080/storeResult';
     const data ={
            
            'name' : name,
             'address' : address,
             'city' : city,
             'country' : country,
             'pincode' : pincode,
             'sat_score' : score

     };
     axios.post(url,data,{
        headers: {
          'Content-Type': 'application/json',
        },}).then((response)=>{
            const result = response.data;    
           if(result == 200)
           {
            getData();
           }
            });
            clear();
    };

    

    const clear=()=>
    {
        setName('');
        setAddress('');
        setCity('');
        setCountry('');
        setPincode('');
        setScore('');
    } ;






    return(
      <Fragment>
      <Table striped bordered hover>
<thead>
  <tr>
    <th>Name</th>
    <th>City</th>
    <th>Country</th>
    <th>Pincode</th>
    <th>Score</th>
    <th>Result</th>
    <th>Actions</th>
  </tr>
</thead>
<tbody>
  {
      data && data.length>0 ?
      data.map((item,index)=>{
          return(
              <tr key ={index}>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.country}</td>
              <td>{item.pincode}</td>
              <td>{item.sat_score}</td>
              <td>{item.result}</td>
              <td colSpan={2}>
              <Button variant="outline-primary" >Update</Button>{' '} &nbsp;
              <Button variant="outline-secondary" onClick={()=>handleGetRank(item.name)}>Get Rank</Button>{' '}
              <Button variant="outline-danger" onClick={()=>handleDelete(item.name)}>Delete</Button>{' '}
              

                  </td>
              </tr>
  
          )
      })
      : 'Loading.....'
  }
  
  
</tbody>
</Table>
<Button variant="outline-primary" onClick={()=>handleAdd()}>Add</Button>{' '}


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

            
          <Modal.Title>Add Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e) => setName(e.target.value)}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={(e) => setAddress(e.target.value)}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                as="textarea" rows={2} 
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              onChange={(e) => setCountry(e.target.value)}
            >
              <Form.Label>Country</Form.Label>
              <Form.Control type="text"
                autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"
            onChange={(e)=>setCity(e.target.value)}>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"
            onChange={(e)=>setPincode(e.target.value)}>
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                type="number"
                
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"
            onChange={(e)=>setScore(e.target.value)}>
              <Form.Label>Score</Form.Label>
              <Form.Control
                type="number"
                
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveBackend}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
</Fragment>

      );
}

export default  CrudOperations;

