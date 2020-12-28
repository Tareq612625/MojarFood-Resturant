import React from 'react'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle,CardText} from 'reactstrap'


const DisDetail=props=>{
    return(
         <div>
             <Card style={{marginTop:"10px"}}>
                 <CardImg top src={props.dish.image} alt={props.dish.name} />
                 <CardBody style={{textAlign:"left"}}>
                     <CardTitle>{props.dish.name}</CardTitle>
                     <CardText>
                         <p>{props.dish.description}</p>
                         <p>Price : {props.dish.price}/-(BDT)</p>
                     </CardText>
                 </CardBody>
             </Card>
         </div>
    )
}

export default DisDetail;