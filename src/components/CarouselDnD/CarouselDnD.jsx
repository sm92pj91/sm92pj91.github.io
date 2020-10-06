import React, {useRef, useState} from "react";
import {useDrag, useDrop} from "react-dnd";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faEdit} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const Image = ({image, callback, index, moveImage, onDelete}) => {
  const ref = useRef(null);
  const [showModal, setShowModal] = useState(false)
  const [type, setType] = useState(image.CarouselItem.Type)
  const [active, setActive] = useState(image.CarouselItem.Active)
  const [category, setCategory] = useState(
      image.CarouselItem.Type === "challenge" ? "" : image.CarouselItem.Id)
  let CarouselChallengeId = React.createRef();
  const [, drop] = useDrop({
    accept: type,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Move the content
      moveImage(dragIndex, hoverIndex);
      // Update the index for dragged item directly to avoid flickering when half dragged
      item.index = hoverIndex;
    }
  });

  const [{isDragging}, drag] = useDrag({
    item: {type, id: image.id, index},
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const editCarouselItem = () => {
    console.log(image)
    setShowModal(true)
  }

  // initialize drag and drop into the element
  drag(drop(ref));
  const handleClose = () => {
    setShowModal(false)

  };
  const handleDelete = () => {
    onDelete(image);
    setShowModal(false);
  };
  const handleSubmit = () => {
    image = {
      ...image, CarouselItem: {
        ...image.CarouselItem, Active: active, Type: type,
        Id: type === "challenge" ? CarouselChallengeId.current.value : category
      }
    }
    console.log(image)
    callback(image)
    setShowModal(false)
  };
  const changeType = () => {
    setType(type === "challenge" ? "category" : "challenge")
  };

  const renderCategory = () => {
    if (type === "category") {
      return (
          <div>
            <Form.Row>
              <Form.Label>Category</Form.Label>
            </Form.Row>


            <Form.Row>
              <Form.Control as="select" size="sm" onChange={selectChange}
                            value={category} custom>
                <option>Travel</option>
                <option>Health & Fitness</option>
                <option>Food & Drink</option>
                <option>Books</option>
                <option>Film & TV</option>
                <option>Music</option>
                <option>Sports</option>
                <option>New</option>
                <option>Arts & Culture</option>
                <option>Daily Life</option>
                <option>Daily Life</option>
                <option>Music</option>
                <option>30 day challenges</option>
                <option>Theatre</option>
                <option>Get Creative</option>
                <option>Productivity</option>
                <option>At Home</option>
                <option>Wellbeing</option>
                <option>For Kids</option>
                <option>Health</option>
                <option>Fitness</option>
                <option>Mindfulness</option>
                <option>Yoga</option>
                <option>Workouts</option>
                <option>Exercise</option>
                <option>Walks</option>
                <option>Reading</option>
                <option>Football</option>
                <option>Extreme sports</option>
                <option>Basketball</option>
                <option>Cricket</option>
                <option>Tennis</option>
                <option>Film</option>
                <option>TV</option>
                <option>Gigs</option>
                <option>Global travel</option>
                <option>UK Travel</option>
                <option>Exploring</option>
                <option>Sightseeing</option>
                <option>Food</option>
                <option>Drink</option>
                <option>Beer</option>
                <option>Entertain Kids</option>
                <option>Eating out</option>
                <option>Golf</option>
                <option>Indoor Entertainment</option>
                <option>Gaming</option>
                <option>Green</option>
              </Form.Control>
            </Form.Row>
          </div>)
    }
  }
  const renderChallenge = () => {
    if (type === "challenge") {
      return (
          <div>
            <Form.Row>
              <Form.Label>Challenge ID</Form.Label>
            </Form.Row>
            <Form.Row>
              <Form.Control size="sm" type="text"
                            placeholder="Challenge ID" id="challengeId"
                            name="CarouselChallengeId"
                            ref={CarouselChallengeId}
                            defaultValue={image.CarouselItem.Type
                            === "challenge" ? image.CarouselItem.Id : ""}
              />
            </Form.Row>
          </div>
      )
    }
  }

  const activeChange = (event) => {
    setActive(!active);
  }
  const selectChange = (event) => {
    setCategory(event.target.value)
    console.log(event.target.value)
  }

  return (

      <div
          ref={ref}
          style={{opacity: isDragging ? 0 : 1}}
          className="file-item"
      >
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title><img alt={`img - ${image.id}`} src={image.src}
                              className="file-img-modal"/></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Type</Form.Label>
                  </Form.Row>
                  <Form.Row>
                    <ToggleButtonGroup
                        type="radio"
                        name="progressType"
                        value={type}
                        onChange={changeType}
                    >
                      <ToggleButton value={'challenge'}>Challenge</ToggleButton>
                      <ToggleButton
                          value={'category'}>Category</ToggleButton>
                    </ToggleButtonGroup>
                  </Form.Row>
                  {renderChallenge()}
                  {renderCategory()}
                  <Form.Row>
                    <Form.Check
                        type="switch"
                        id="activeId"
                        label="Active"
                        checked={active}
                        onChange={activeChange}
                    />
                  </Form.Row>
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <img alt={`img - ${image.id}`} src={image.src} className="file-img"/>
        <div>
          <div style={{float: "left"}} onClick={editCarouselItem}>
            <FontAwesomeIcon icon={faEdit}/></div>
          <div style={{float: "right"}}><FontAwesomeIcon icon={faCircle}
                                                         color={image.CarouselItem.Active
                                                             ? "green"
                                                             : "red"}/></div>
        </div>
      </div>
  );
};

const CarouselDnD = ({images, callback, moveImage, onDelete}) => {
  const renderImage = (image, index) => {
    return (

        <Image
            image={image}
            callback={callback}
            onDelete={onDelete}
            index={index}
            key={`${image.id}-image`}
            moveImage={moveImage}
        />

    );
  };

  return <section className="file-list">{images.map(
      renderImage)}</section>;
};

export default CarouselDnD;
