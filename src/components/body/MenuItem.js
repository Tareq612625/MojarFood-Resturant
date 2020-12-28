import React from 'react'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap'

const MenuItem=props=>{
    // console.log(props);
    return(
        <div>
            <Card style={{ margin:"10px"}}>
                <CardBody>
                    <CardImg 
                    width="100%" 
                    alt={props.dish.name} 
                    src={props.dish.image}
                    style={{ opacity : "0.75"}}
                    >
                    </CardImg>
                    <CardImgOverlay>
                        <h4><CardTitle 
                            style={{cursor:"pointer"}} 
                            // onClick={() => props.DishSelect(props.dish)} //Data Binding Process
                            onClick={props.DishSelect}
                        >
                            {props.dish.name}
                        </CardTitle></h4>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}
export default MenuItem;