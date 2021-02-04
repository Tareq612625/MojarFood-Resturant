import React, { Component } from 'react'
import { Button, FormGroup, Label, Col } from "reactstrap"
import ImageUploader from 'react-images-upload';
import { Form, Control, Errors, actions } from "react-redux-form"
import { connect } from "react-redux"

const mapDispatchToProps = dispatch => {
    return {
        resetFeedbackForm: () => {
            dispatch(actions.reset('CreateItem'))
        }
    }
}

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: pictureFiles
        });
    }


    handelInputSubmit = values => {
        // console.log(values);
        this.props.resetFeedbackForm()
    }
    render() {
        document.title = "Contact"
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "20px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Create Product</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form model="CreateItem" onSubmit={values => this.handelInputSubmit(values)}>
                            <FormGroup row>
                                <Label htmlFor="productname" md={2}>Product Name</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".productname"
                                        name="productname"
                                        placeholder="Product Name"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".productname"
                                        show="touched"
                                        messages={
                                            { required: "Required" }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="label" md={2}>Label</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".label"
                                        name="lable"
                                        placeholder="product catagory"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".label"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="catagory" md={2}>Catagory</Label>
                                <Col md={10}>
                                    <Control.select
                                        model=".catagory"
                                        name="catagory"
                                        className="form-control"
                                    >
                                        <option>Select One</option>
                                        <option>Phone</option>
                                        <option>Camera</option>
                                        <option>Laptop</option>
                                        <option>Monitor</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="price" md={2}>Price</Label>
                                <Col md={10}>
                                    <Control.text
                                        model=".price"
                                        type="text"
                                        name="price"
                                        placeholder="000000"
                                        className="form-control"
                                        validators={{
                                            required,
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".price"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required",
                                                isNumber: "invalid Number !"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="description" md={2}>Product Description</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".description"
                                        name="description"
                                        rows="8"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    >
                                    </Control.textarea>
                                    <Errors
                                        className="text-danger"
                                        model=".description"
                                        show="touched"
                                        messages={
                                            {
                                                required: "Required"
                                            }
                                        }
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="image" md={2}>Picture Upload</Label>
                                <Col md={10}>
                                    <ImageUploader
                                        withIcon={true}
                                        buttonText='Choose images'
                                        onChange={this.onDrop}
                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                        maxFileSize={5242880}
                                    />

                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        className="form-control"
                                    >
                                        ADD PRODUCT
                                </Button>
                                </Col>
                            </FormGroup>

                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null, mapDispatchToProps)(Contact);