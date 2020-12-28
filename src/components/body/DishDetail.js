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
                     <CardText>
                         <p>{props.dish.description}</p>
                         <b><p>Price : {props.dish.price}/-(BDT)</p></b>
                     </CardText>
                     <hr/>
                     <LoadComments comments={props.dish.comments} />
                 </CardBody>
             </Card>
         </div>
    )
}

export default DisDetail;