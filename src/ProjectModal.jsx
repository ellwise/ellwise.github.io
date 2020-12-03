import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure'

const ProjectModal = (props) => {
    return (
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton closeLabel="close window">
          <h4>
            {props.title}
          </h4>
        </Modal.Header>
        <Modal.Body>
          <Figure style={{float:"right", width:"50%"}}>
            <Figure.Image src={props.image} style={{width:"100%"}}/>
            <Figure.Caption>{props.caption}</Figure.Caption>
          </Figure>
          {props.description.map((p,j) => <p>{p}</p>)}
        </Modal.Body>
      </Modal>
    )
}

export default ProjectModal;