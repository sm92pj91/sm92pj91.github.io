import React, {useCallback, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Col} from "react-bootstrap";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Dropzone from "../../../components/Dropzone/Dropzone";
import cuid from "cuid";
import Image from "react-bootstrap/Image";
import config from "../../../configs/config"
import {Auth} from "aws-amplify";
import {CATEGORIES} from "./categories"
import {MultiSelect} from "react-selectize";
import imageDataURI from "image-data-uri"
import {Redirect} from "react-router-dom";
import {notification} from 'antd';
import  randomstring from 'randomstring';

const CreateChallenge = (props) => {
  const [validated, setValidated] = useState(false);
  const [ChallengeId, setChallengeId] = useState(props.match.params.id);
  const [ChallengeLoaded, setChallengeLoaded] = useState(false);
  const [redirect, setRedirect] = useState(false);
  let ChallengeName = React.createRef();
  let Description = React.createRef();
  let InputCount = React.createRef();
  let Placeholder = React.createRef();
  const [challenge, setChallenge] = useState({
    ChallengeId: "",
    Name: "",
    Description: "",
    ChallengeType: "BASIC",
    ProgressType: "fraction",
    IsActive: true,
    IsReminder: true,
    IsSearchable: true,
    LiveAt: new Date(),
    ChallengeItems: [{item: "", id: randomstring.generate(10)}],
    CategoryItems: [],
    Interval: "DAILY",
    Image: "",
    Categories: []
  })

  const [challengeItemsBackup, setChallengeItemsBackup] = useState(
      [{item: "",id: randomstring.generate(10)}])
  const [categoryItemsBackup, setCategoryItemsBackup] = useState(
      [{Category: "", ChallengeItems: [{item: "",id: randomstring.generate(10)}]}])
  const [image, setImage] = useState([]);

  Auth.currentSession({
    bypassCache: true
  }).then(user => {
    if (ChallengeId && !ChallengeLoaded) {
      fetch(config.BASE_URL + '/challenge/' + ChallengeId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.getIdToken().getJwtToken()
        },
      }).then(res => {
            setChallengeLoaded(true)
            if(res.status !==200){
              alert("Error, Challenge not found");
              return;
            }
            res.json()
            .then(response => {
              setChallengeId(response.ChallengeId)
              imageDataURI.encodeFromURL(
                  config.IMAGE_BASE + '/' + response.ChallengeId + '/main.jpg')
              .then(res => {
                if (res === "data:application/octet-stream;base64,") {
                  return
                }
                console.log(res);
                setImage([{id: cuid(), src: res}])
              })
              if (response.ChallengeType === "CATEGORIES") {
                setChallenge({
                  ...response,
                  ChallengeItems: [],
                  LiveAt: new Date(response.LiveAt)
                })
              } else {
                setChallenge({
                  ...response,
                  CategoryItems: [],
                  LiveAt: new Date(response.LiveAt)
                })
              }
              console.log(challenge)
              document.querySelector(
                  '[name="challengeName"]').value = response.Name
              document.querySelector(
                  '[name="Description"]').value = response.Description
              if(response.ChallengeType === 'ENTERASYOUGO'){
                document.querySelector(
                    '[name="Placeholder"]').value = response.Placeholder
                document.querySelector(
                    '[name="InputCount"]').value = response.InputCount
              }
            })
            .catch(err => console.log(err))
          }
      )
      .catch(error => console.log(error));
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
      return <Redirect to={'/login'} />
    }
  }
  const renderInterval = () => {
    if (challenge.ChallengeType === "BASICINTERVAL") {
      return (
          <div>
            <Form.Row>
              <Form.Group as={Col} md="5">
                <Form.Label>Challenge Interval</Form.Label>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="5">
                <ToggleButtonGroup
                    type="radio"
                    name="challengeInterval"
                    value={challenge.Interval}
                    onChange={onIntervalChange}
                >
                  <ToggleButton value={'DAILY'}>Daily</ToggleButton>
                  <ToggleButton value={'WEEKLY'}>Weekly</ToggleButton>
                  <ToggleButton value={'MONTHLY'}>Monthly</ToggleButton>
                </ToggleButtonGroup>
              </Form.Group>
            </Form.Row>
          </div>
      )
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      let newChallenge = {
        // ...challenge,
        Categories: challenge.Categories,
        ChallengeId: challenge.ChallengeId,
        ChallengeType: challenge.ChallengeType,
        IsActive: challenge.IsActive,
        IsReminder: challenge.IsReminder,
        IsSearchable: challenge.IsSearchable,
        ProgressType: challenge.ProgressType,
        Name: ChallengeName.current.value,
        Description: Description.current.value.length > 0
            ? Description.current.value : " ",
        LiveAt: challenge.LiveAt.toISOString()
      };
      if (image.length > 0) {
        if (image[0].src.split(',').length > 1) {
          newChallenge.Image = image[0].src.split(',')[1]
        }
      }
      if (newChallenge.ChallengeType === 'ENTERASYOUGO') {
        newChallenge.Placeholder = Placeholder.current.value.length > 0
        ? Placeholder.current.value : 'Add Item'
        newChallenge.InputCount = parseInt(InputCount.current.value)
      } else if(newChallenge.ChallengeType === 'BASIC' || newChallenge.ChallengeType === 'BASICINTERVAL') {
        newChallenge.ChallengeItems = challenge.ChallengeItems.map(
            (c, index) => ({index: index, item: c.item, id: c.id}));
        if( newChallenge.ChallengeType === 'BASICINTERVAL'){
          newChallenge.Interval = challenge.Interval;
        }
      } else if( newChallenge.ChallengeType === 'CATEGORIES'){
        newChallenge.CategoryItems = challenge.CategoryItems.map((cat, ind) => ({
          Category: cat.Category,
          ChallengeItems: cat.ChallengeItems.map((ch, index) => ({
            index: index,
            item: ch.item,
            id: ch.id
          }))
        }));
      }
      console.log(newChallenge)
      Auth.currentSession({
        bypassCache: true
      }).then(user => {
        let url = config.BASE_URL + '/challenge'
        let method = "POST"
        if (ChallengeId) {
          method = "PUT"
          url = config.BASE_URL + '/challenge/' + ChallengeId
        }

        fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.getIdToken().getJwtToken()
          },
          body: JSON.stringify(newChallenge),
        }).then(res => {
              if (res.status !== 201) {
                notification.open({
                  type: 'error',
                  message: 'Something went wrong',
                  description: 'status' + res.status,
                  duration: 10
                });
                res.json()
                .then(response =>
                    notification.open({
                      type: 'error',
                      message: 'Something went wrong',
                      description: 'error' + response,
                      duration: 10
                    }))
                .catch(err => alert(err))
              }
              res.json()
              .then(response => {
                let message = 'Challenge ' + (ChallengeId? 'edited successfully' : 'created successfully')
                notification.open({
                  type: 'success',
                  message: message,
                  description: 'Challenge id: ' + response.ChallengeId,
                  duration: 10
                });
                console.log(response)
                setChallengeId(response.ChallengeId)
              })
              .catch(err => alert(err))
            }
        )
        .catch(error => alert(error));

      })
      .catch(err => {
        notification.open({
          type: 'error',
          message: 'Something went wrong',
          description: err,
          duration: 10
        });
      });

    }

  };

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage([{id: cuid(), src: e.target.result}]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);
  const onDropCSV = useCallback(acceptedFiles => {
    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setChallengesUpload(e.target.result)
      };
      reader.readAsBinaryString(file);
      return file;
    });
  }, [challenge]);

  const setChallengesUpload = (file) => {
    console.log(challenge)
    if (challenge.ChallengeType === "CATEGORIES") {
      let newItems = []
      file.split("\n").forEach(x => {
        if (x.length !== 0) {
          let categoryItem = {Category: x.split(",")[0], ChallengeItems: []}
          x.split(",").splice(1).forEach(y => {
            categoryItem = {
              ...categoryItem,
              ChallengeItems: [...categoryItem.ChallengeItems,
                {item: y, id: randomstring.generate(10)}]
            }
          })
          newItems.push(categoryItem);
        }

      })
      setChallenge({...challenge, CategoryItems: newItems})
    } else {
      let newItems = []
      file.split("\n").forEach(x => {
        if (x.length > 0) {
          newItems.push({item: x, id: randomstring.generate(10)})
        }
      })
      setChallenge({...challenge, ChallengeItems: [...newItems]})
    }

  };

  const toggleActive = () => {
    let newChallenge = {...challenge, IsActive: !challenge.IsActive}
    setChallenge(newChallenge)
  };
  const toggleReminder = () => {
    let newChallenge = {...challenge, IsReminder: !challenge.Reminder}
    setChallenge(newChallenge)
  };
  const toggleSearchable = () => {
    setChallenge({...challenge, IsSearchable: !challenge.IsSearchable})
  };

  const onIntervalChange = interval => {
    setChallenge({...challenge, Interval: interval})
  }

  const onTypeChange = ctype => {
    console.log(ctype)
    if (ctype === "CATEGORIES") {
      if (challenge.CategoryItems.length === 0) {
        setChallengeItemsBackup(challenge.ChallengeItems)
        setChallenge({
          ...challenge,
          ChallengeItems: [],
          ChallengeType: ctype,
          CategoryItems: categoryItemsBackup
        })
      } else {
        setChallenge({...challenge, ChallengeType: ctype})
      }
    } else if (ctype === "ENTERASYOUGO") {
      setChallengeItemsBackup(challenge.ChallengeItems)
      setCategoryItemsBackup(challenge.CategoryItems)
      setChallenge({...challenge, CategoryItems: [], ChallengeItems: [],  ChallengeType: ctype})
    } else {
      if (challenge.ChallengeItems.length === 0) {
        setCategoryItemsBackup(challenge.CategoryItems)
        setChallenge({
          ...challenge,
          CategoryItems: [],
          ChallengeType: ctype,
          ChallengeItems: challengeItemsBackup
        })
      } else {
        setChallenge({...challenge, ChallengeType: ctype})
      }
    }
  };

  const onChangeProgress = pt => {
    setChallenge({...challenge, ProgressType: pt})
  };
  const deleteImage = () => {
    setChallenge({...challenge, Image: ""})
    setImage([])
  }
  const handleRemoveChallengeItem = idx => () => {
    if (idx === 0) {
      return
    }
    setChallenge({
      ...challenge,
      ChallengeItems: challenge.ChallengeItems.filter((x, sidx) => idx !== sidx)
    })
  };

  const handleInsertChallengeItem = idx => () => {
    setChallenge({
      ...challenge,
      ChallengeItems: [...challenge.ChallengeItems.slice(0, idx + 1),
        {item: "", id: randomstring.generate(10)},
        ...challenge.ChallengeItems.slice(idx + 1)]
    })
  };
  const handleMoveUpChallengeItem = idx => () => {
    if (idx === 0) {
      return;
    }
    setChallenge({
      ...challenge,
      ChallengeItems: [...challenge.ChallengeItems.slice(0, idx - 1),
        challenge.ChallengeItems[idx],
        challenge.ChallengeItems[idx - 1],
        ...challenge.ChallengeItems.slice(idx + 1)]
    })
  };
  const handleMoveDownChallengeItem = idx => () => {
    if (idx !== challenge.ChallengeItems.length - 1) {
      setChallenge({
        ...challenge,
        ChallengeItems: [...challenge.ChallengeItems.slice(0, idx),
          challenge.ChallengeItems[idx + 1],
          challenge.ChallengeItems[idx],
          ...challenge.ChallengeItems.slice(idx + 2)]
      })
    }
  };

  const handleChangeChallengeItem = idx => evt => {
    const newChallengeItems = challenge.ChallengeItems.map(
        (challengeItem, sidx) => {
          if (idx !== sidx) {
            return challengeItem;
          }
          return {...challengeItem, item: evt.target.value};
        });
    setChallenge({...challenge, ChallengeItems: newChallengeItems})
  };

  const handleRemoveCategoryChallengeItem = (idx, idc) => () => {
    setChallenge({
      ...challenge,
      CategoryItems: challenge.CategoryItems.map((categoryItem, sidx) => {
            if (idx !== sidx) {
              return categoryItem
            } else {
              return {
                ...categoryItem,
                ChallengeItems: categoryItem.ChallengeItems.filter(
                    (y, sidy) => idc !== sidy)
              }
            }
          }
      )
    })
  };

  const handleInsertCategoryChallengeItem = (idx, idc) => () => {
    setChallenge({
      ...challenge,
      CategoryItems: challenge.CategoryItems.map((categoryItem, sidx) => {
            if (idx !== sidx) {
              return categoryItem
            } else {
              return {
                ...categoryItem,
                ChallengeItems: [...categoryItem.ChallengeItems.slice(0, idc + 1),
                  {item: "", id: randomstring.generate(10)},
                  ...categoryItem.ChallengeItems.slice(idc + 1)]
              }
            }
          }
      )
    });
  };
  const handleMoveUpCategoryChallengeItem = (idx, idc) => () => {
    if (idc !== 0) {
      setChallenge({
        ...challenge,
        CategoryItems: challenge.CategoryItems.map((categoryItem, sidx) => {
              if (idx !== sidx) {
                return categoryItem
              } else {
                return {
                  ...categoryItem,
                  ChallengeItems: [...categoryItem.ChallengeItems.slice(0, idc - 1),
                    categoryItem.ChallengeItems[idc],
                    categoryItem.ChallengeItems[idc - 1],
                    ...categoryItem.ChallengeItems.slice(idc + 1)]
                }
              }
            }
        )
      })
    }
  };
  const handleMoveDownCategoryChallengeItem = (idx, idc) => () => {
    setChallenge({
      ...challenge,
      CategoryItems: challenge.CategoryItems.map((categoryItem, sidx) => {
            if (idx !== sidx) {
              return categoryItem
            } else {
              if (idc === categoryItem.ChallengeItems.length - 1) {
                return categoryItem
              }
              return {
                ...categoryItem,
                ChallengeItems: [...categoryItem.ChallengeItems.slice(0, idc),
                  categoryItem.ChallengeItems[idc + 1],
                  categoryItem.ChallengeItems[idc],
                  ...categoryItem.ChallengeItems.slice(idc + 2)]
              }
            }
          }
      )
    });
  };

  const handleChangeCategoryChallengeItem = (idx, idc) => evt => {
    setChallenge({
      ...challenge,
      CategoryItems: challenge.CategoryItems.map((categoryItem, sidx) => {
            if (idx !== sidx) {
              return categoryItem
            } else {
              return {
                ...categoryItem,
                ChallengeItems: [...categoryItem.ChallengeItems.slice(0, idc),
                  {...categoryItem.ChallengeItems.slice(idc,idc+1)[0], item: evt.target.value},
                  ...categoryItem.ChallengeItems.slice(idc + 1)]
              }
            }
          }
      )
    });
  };

  const handleRemoveCategoryItem = idx => () => {
    if (idx !== 0) {
      setChallenge({
        ...challenge,
        CategoryItems: challenge.CategoryItems.filter((x, sidx) => idx !== sidx)
      })
    }
  };

  const handleInsertCategoryItem = idx => () => {
    setChallenge({
      ...challenge,
      CategoryItems: [...challenge.CategoryItems.slice(0, idx + 1),
        {Category: "", ChallengeItems: [{item: "",id: randomstring.generate(10)}]},
        ...challenge.CategoryItems.slice(idx + 1)]
    });
  };
  const handleMoveUpCategoryItem = idx => () => {
    if (idx !== 0) {
      setChallenge({
        ...challenge,
        CategoryItems: [...challenge.CategoryItems.slice(0, idx - 1),
          challenge.CategoryItems[idx],
          challenge.CategoryItems[idx - 1],
          ...challenge.CategoryItems.slice(idx + 1)]
      })
    }
  };
  const handleMoveDownCategoryItem = idx => () => {
    if (idx !== challenge.CategoryItems.length - 1) {
      setChallenge({
        ...challenge,
        CategoryItems: [...challenge.CategoryItems.slice(0, idx),
          challenge.CategoryItems[idx + 1],
          challenge.CategoryItems[idx],
          ...challenge.CategoryItems.slice(idx + 2)]
      })
    }
  };

  const handleChangeCategoryItem = idx => evt => {
    const newCategoryItems = challenge.CategoryItems.map(
        (categoryItem, sidx) => {
          if (idx !== sidx) {
            return categoryItem;
          }
          return {...categoryItem, Category: evt.target.value};
        });
    setChallenge({
      ...challenge,
      CategoryItems: newCategoryItems
    });
  };
  const setChallengeLiveAt = date => {
    setChallenge({...challenge, LiveAt: date})
  };

  return (

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div>
          {renderRedirect()}
        </div>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="challengeNameControl">
            <Form.Label>Challenge Name</Form.Label>
            <Form.Control
                name="challengeName"
                required
                type="text"
                placeholder="Challenge Name"
                ref={ChallengeName}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a challenge name
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="7">
            <Form.Label>Challenge Type</Form.Label>
          </Form.Group>
          <Form.Group as={Col} md="5">
            <Form.Label>Progress Type</Form.Label>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="7">
            <ToggleButtonGroup
                type="radio"
                name="challengeType"
                value={challenge.ChallengeType}
                onChange={onTypeChange}
            >
              <ToggleButton value={'BASIC'}>Basic</ToggleButton>
              <ToggleButton value={'BASICINTERVAL'}>Basic
                Interval</ToggleButton>
              <ToggleButton value={'CATEGORIES'}>Categories</ToggleButton>
              <ToggleButton value={'ENTERASYOUGO'}>Enter AYG</ToggleButton>
              <ToggleButton value={'CALENDAR'}>Calendar</ToggleButton>
            </ToggleButtonGroup>
          </Form.Group>
          <Form.Group as={Col} md="5">
            <ToggleButtonGroup
                type="radio"
                name="progressType"
                value={challenge.ProgressType}
                onChange={onChangeProgress}
            >
              <ToggleButton value={'fraction'}>Fraction</ToggleButton>
              <ToggleButton value={'percentage'}>Percentage</ToggleButton>
            </ToggleButtonGroup>
          </Form.Group>
        </Form.Row>
        <div>
          {renderInterval()}
        </div>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="categoriesControl">
            <Form.Label>Categories</Form.Label>
            <div>
              <MultiSelect
                  id={ChallengeLoaded}
                  placeholder="Select Categories"
                  options={CATEGORIES.map(
                      category => ({label: category, value: category})
                  )}
                  onValuesChange={value => {
                    setChallenge(
                        {...challenge, Categories: value.map(x => x.value)})
                  }}
                  values={challenge.Categories.map(category => ({label: category, value: category}))}
              /></div>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="10" controlId="descriptionControl">
            <Form.Label>Description</Form.Label>
            <Form.Control
                type="textarea"
                placeholder="Description"
                maxLength="60"
                ref={Description}
                name="Description"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="2">
            <Form.Check
                type="switch"
                id="activeswitch"
                label="Active"
                checked={challenge.IsActive}
                onChange={toggleActive}
            />
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Check
                type="switch"
                id="searchableswitch"
                label="Searchable"
                checked={challenge.IsSearchable}
                onChange={toggleSearchable}
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Live Date&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
            <DatePicker
                selected={challenge.LiveAt}
                onChange={setChallengeLiveAt}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="3">
            <Form.Check
                type="switch"
                id="reminderswitch"
                label="User can set reminder"
                checked={challenge.Reminder}
                onChange={toggleReminder}
            />
          </Form.Group>
        </Form.Row>

        {challenge.ChallengeType === 'ENTERASYOUGO' ?
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="placeholderControl">
                <Form.Label>Placeholder Text</Form.Label>
                <Form.Control
                    type="textarea"
                    placeholder="Item Placeholder Text"
                    maxLength="30"
                    ref={Placeholder}
                    name="Placeholder"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="inputCountControl">
                <Form.Label>Number of Items</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="0 for infinite"
                    ref={InputCount}
                    name="InputCount"
                />
              </Form.Group>
            </Form.Row>
            : challenge.ChallengeType !== 'CALENDAR' ?
            <Form.Row>
              <Form.Group as={Col} md="5">
                <Form.Label>Challenge Items</Form.Label>
              </Form.Group>
            </Form.Row> : <></>
        }
        {challenge.ChallengeItems ? challenge.ChallengeItems.map((challengeItem, idx) => (
            <div>
              <Form.Row>
                <Form.Group as={Col} md={"6"}>
                  <Form.Control
                      type="text"
                      placeholder={`Challenge Item #${idx + 1} name`}
                      value={challengeItem.item}
                      onChange={handleChangeChallengeItem(idx)}
                  />
                </Form.Group>
                <Form.Group as={Col} md={"4"}>
                  <Button
                      type="button"
                      onClick={handleRemoveChallengeItem(idx)}
                      className="small"
                  >
                    -
                  </Button>
                  <Button
                      type="button"
                      onClick={handleInsertChallengeItem(idx)}
                      className="small"
                  >
                    +
                  </Button>
                  <Button
                      type="button"
                      onClick={handleMoveUpChallengeItem(idx)}
                      className="small"
                  >
                    ^
                  </Button>
                  <Button
                      type="button"
                      onClick={handleMoveDownChallengeItem(idx)}
                      className="small"
                  >
                    v
                  </Button>
                </Form.Group>
              </Form.Row>
            </div>
        )) : <></> }

        {challenge.CategoryItems ? challenge.CategoryItems.map((categoryItem, idx) => (
            <div>
              <Form.Row>
                <Form.Group as={Col} md={"6"}>
                  <Form.Control
                      type="text"
                      placeholder={`Category Item #${idx + 1} name`}
                      value={categoryItem.Category}
                      onChange={handleChangeCategoryItem(idx)}
                  />
                </Form.Group>
                <Form.Group as={Col} md={"4"}>
                  <Button
                      type="button"
                      onClick={handleRemoveCategoryItem(idx)}
                      className="small"
                  >
                    -
                  </Button>
                  <Button
                      type="button"
                      onClick={handleInsertCategoryItem(idx)}
                      className="small"
                  >
                    +
                  </Button>
                  <Button
                      type="button"
                      onClick={handleMoveUpCategoryItem(idx)}
                      className="small"
                  >
                    ^
                  </Button>
                  <Button
                      type="button"
                      onClick={handleMoveDownCategoryItem(idx)}
                      className="small"
                  >
                    v
                  </Button>
                </Form.Group>
              </Form.Row>
              {categoryItem.ChallengeItems.map((challengeItem, idc) => (
                  <div>
                    <Form.Row>
                      <Form.Group as={Col} md={"1"}></Form.Group>
                      <Form.Group as={Col} md={"6"}>
                        <Form.Control
                            type="text"
                            placeholder={`Challenge Item #${idc + 1} name`}
                            value={challengeItem.item}
                            onChange={handleChangeCategoryChallengeItem(idx,
                                idc)}
                        />
                      </Form.Group>
                      <Form.Group as={Col} md={"4"}>
                        <Button
                            type="button"
                            onClick={handleRemoveCategoryChallengeItem(idx,
                                idc)}
                            className="small"
                        >
                          -
                        </Button>
                        <Button
                            type="button"
                            onClick={handleInsertCategoryChallengeItem(idx,
                                idc)}
                            className="small"
                        >
                          +
                        </Button>
                        <Button
                            type="button"
                            onClick={handleMoveUpCategoryChallengeItem(idx,
                                idc)}
                            className="small"
                        >
                          ^
                        </Button>
                        <Button
                            type="button"
                            onClick={handleMoveDownCategoryChallengeItem(idx,
                                idc)}
                            className="small"
                        >
                          v
                        </Button>
                      </Form.Group>
                    </Form.Row>
                  </div>))}

            </div>
        )) : <></> }

        {/*<input type="file" name="file" onChange={onFileChangeHandler}/>*/}
        <Form.Row>
          <Form.Group as={Col} md={"6"}>
            <Dropzone onDrop={onDrop} title={"Upload Challenge Image"}
                      accept={"image/*"}/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {image.map(x => (
              <div>
                <Col xs={6} md={4}>
                  <Image src={x.src} fluid/>
                </Col>
                <Form.Group as={Col} md={"4"}>
                  <Button onClick={deleteImage}>Delete</Button>
                </Form.Group>
              </div>
          ))}
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md={"6"}>
            <Dropzone onDrop={onDropCSV} title={"Upload CSV"}
                      accept={".csv, application/vnd.ms-excel, text/csv"}/>
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit Challenge</Button>
      </Form>

  );
}

export default CreateChallenge
