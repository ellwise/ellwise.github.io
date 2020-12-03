import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => {
    return (
        <Card style={{height:"200px"}}>
            <Card.Header>
              {props.title}
            </Card.Header>
            <div style={{overflow:"hidden", cursor:"pointer"}}>
                <Card.Img src={props.image} onClick={props.onClick}>
                </Card.Img>
            </div>
        </Card>
    )
}

export default ProjectCard;