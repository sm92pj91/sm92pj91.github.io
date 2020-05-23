import React, {useCallback, useState} from "react";
import Dropzone from "../../components/Dropzone/Dropzone";
import {DndProvider} from "react-dnd";
import CarouselDnD from "../../components/CarouselDnD/CarouselDnD";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import update from "immutability-helper";
import "./carousel.css"
import {Auth} from "aws-amplify";
import config from "../../configs/config";
import {notification} from 'antd';
import {Redirect} from "react-router-dom";
import Button from "react-bootstrap/Button";

export const isTouchDevice = () => {
  if ("ontouchstart" in window) {
    return true;
  }
  return false;
};

const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

const Carousel = (props) => {
  const [images, setImages] = useState([]);
  // const [carouselItems,setCarouselItems] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [carouselLoaded, setCarouselLoaded] = useState(false);

  Auth.currentSession({
    bypassCache: true
  }).then(user => {
    if (!carouselLoaded) {
      fetch(config.BASE_URL + '/carousel', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.getIdToken().getJwtToken()
        },
      }).then(res => {
        setCarouselLoaded(true)
        if (res.status !== 200) {
          notification.open({
            type: 'error',
            message: 'Carousel Not Found',
            description: 'Redirecting to login page',
            duration: 10
          });
          return;
        }
        res.json()
        .then(response => {
          // setCarouselItems(response.CarouselItems);
          let newCarouselItems = []
          response.CarouselItems.forEach(c => {
            newCarouselItems = [...newCarouselItems, {
              id: c.Id,
              src: config.CAROUSEL_BASE + '/' + c.ImageId,
              CarouselItem: c
            }]
          })
          setImages(newCarouselItems)

        })
      }).catch(err => {
        notification.open({
          type: 'error',
          message: 'Not could not load carousel',
          description: err,
          duration: 10
        });
      });

    }
  })
  .catch(err => {
    notification.open({
      type: 'error',
      message: 'Not logged in',
      description: 'Redirecting to login page',
      duration: 10
    });
    setRedirect(true)
  });
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to={'/login'}/>
    }
  }

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        Auth.currentSession({
          bypassCache: true
        }).then(user => {
          let url = config.BASE_URL + '/carousel'
          let method = "POST"
          fetch(url, {
            method: method,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + user.getIdToken().getJwtToken()
            },
            body: JSON.stringify({Image: e.target.result.split(',')[1]}),
          }).then(res => {
            if (res.status !== 201) {
              res.json().then(json => {
                notification.open({
                  type: 'error',
                  message: 'Something went wrong',
                  description: json,
                  duration: 10
                });
              }).catch(err => {
                  notification.open({
                    type: 'error',
                    message: 'Something went wrong',
                    description: err,
                    duration: 10
                  });
              })
            }
            notification.open({
              type: 'success',
              message: 'Submitted new image',
              duration: 10
            });
            res.json().then(json => {
              setImages(prevState => [
                ...prevState,
                {
                  id: json.Id,
                  src: e.target.result,
                  CarouselItem: {
                    ImageId: json.Id,
                    Index: images.length,
                    Type: "challenge",
                    Active: false,
                    Id: ""
                  }
                }
              ]);
            })
            .catch(err => {
              notification.open({
                type: 'error',
                message: 'Something went wrong',
                description: err,
                duration: 10
              });
            })

          })
          .catch(err => {
              notification.open({
                type: 'error',
                message: 'Something went wrong',
                description: err,
                duration: 10
              });
          })
        })
        .catch(err => {
          notification.open({
            type: 'error',
            message: 'Issue with authentication, please log in again',
            description: err,
            duration: 10
          });
        })

      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = images[dragIndex];
    setImages(
        update(images, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, draggedImage]]
        })
    );
  };

  const onUpdateImage = useCallback(image => {
    let newImages = images.map(img => {
      if (img.id === image.id) {
        return image
      } else {
        return img
      }
    })
    setImages(newImages)
  }, [images]);
  const submitChange = () => {
    if ((images.filter(img => (img.CarouselItem.Id === ""))).length > 0) {
      notification.open({
        type: 'error',
        message: 'Make sure all carousel items have either a challenge id or category',
        duration: 10
      });
      return;
    }
    Auth.currentSession({
      bypassCache: true
    }).then(user => {
      let url = config.BASE_URL + '/carousel'
      let method = "PUT"
      fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.getIdToken().getJwtToken()
        },
        body: JSON.stringify({
          CarouselItems: images.map(
              (img, ind) => ({...img.CarouselItem, Index: ind}))
        }),
      }).then(res => {
        notification.open({
          type: 'success',
          message: 'Changes Submitted',
          duration: 10
        });

      })
      .catch(err => {
          notification.open({
            type: 'error',
            message: 'Something went wrong',
            description: err,
            duration: 10
          });
      })
    })
    .catch(err => {
      notification.open({
        type: 'error',
        message: 'Issue with authentication, please log in again',
        description: err,
        duration: 10
      });
    })
  }

  return (
      <div>
        {renderRedirect()}
        <Dropzone onDrop={onDrop} title={"Upload New Carousel Image"}
                  accept={"image/*"}/>
        <DndProvider backend={backendForDND}>
          <CarouselDnD images={images} callback={onUpdateImage}
                       moveImage={moveImage}/>
        </DndProvider>
        <Button onClick={submitChange}>Submit Changes</Button>
      </div>

  );
}

export default Carousel
