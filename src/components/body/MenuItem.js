import React from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText, Button, ButtonGroup } from 'reactstrap'

const MenuItem = props => {
    console.log("item Props is ", props);
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody >
                    <CardImg
                        width="100%"
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{ opacity: "0.80", height: '250px', width: "300px" }}

                    >
                    </CardImg>
                    <CardImgOverlay>
                        <h4><CardTitle
                            style={{ cursor: "pointer" }}
                        // onClick={() => props.DishSelect(props.dish)} //Data Binding Process

                        >
                            <b>{props.dish.name}</b>
                        </CardTitle></h4>
                    </CardImgOverlay>
                    <CardText>Price is : {props.dish.price} /- (BDT)</CardText>
                </CardBody>
                <ButtonGroup className="mb-2">
                    <Button variant="Primary" onClick={props.DishSelect}>Product Details</Button>
                </ButtonGroup>
                <br />
            </Card>
            <br></br>
        </div>
    );
}
export default MenuItem;