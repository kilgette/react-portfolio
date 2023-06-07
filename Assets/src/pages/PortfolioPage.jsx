import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


const portfolioData = (props) => {
}

  const [show, setShow] = useState(false);
  const [activeModal, setModal] = useState({
    title: "",
    description: "",
    gitHub: "",
    stack: ""
  })

  const handleClose = () => setShow(false)
  const handleShow = (event) => {
    setModal(projectData[event.target.dataset["name"]])
    setShow(true)}

const portfolioData = [ {
  title:"",
  description:"", 
  gitHub:<a>placeholder</a>,
  stack:"",
}


]

return(<></>

)

export default portfolioPage