import React from 'react'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle,CardText} from 'reactstrap'
import LoadComments from './LoadComments'


const DisDetail=props=>{
    return(
         <div>
             <Card style={{marginTop:"10px"}}>
                 <CardImg top src={props.dish.image} alt={props.dish.name} />
                 <CardBody style={{textAlign:"left"}}>
                     <h4><CardTitle>{props.dish.name}</CardTitle></h4>
                    <CardText> {props.dish.description}</CardText>
                    <CardText> Price : {props.dish.price}/-(BDT)</CardText>
                     <hr/>
                     <LoadComments comments={props.comments} />
                 </CardBody>
             </Card>
         </div>
    )
}

export default DisDetail;