import React, { Component } from 'react'
import MenuItem from './MenuItem'
import DisDetail from './DishDetail'
import { CardColumns, Modal, ModalBody, ModalFooter, Button, Form, Input } from 'reactstrap'
import { connect } from 'react-redux';
import { addComment, fatchDishes } from '../../redux/actionCreators'
import Loading from "./Loading"
import Filter from "./Filter"


const mapStateProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
        fatchDishes: () => dispatch(fatchDishes())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }
    onDishSelect = dish => {
        // console.log(dish);
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })
    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    componentDidMount() {
        this.props.fatchDishes();
    }

    render() {
        document.title = "Menu"

        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem dish={item}
                        key={item.id}
                        DishSelect={() => this.onDishSelect(item)}
                    />
                );
            })
            let dishDetail = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.filter(comment => {
                    return comment.dishId === this.state.selectedDish.id;
                })
                dishDetail = <DisDetail
                    dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addComment}
                />
            }

            return (
                <div className="container">
                    <Filter
                        price={this.state.price}
                        sort={this.state.sort}
                        handelChangeSort={this.handelChangeSort}
                    />
                    <br />
                    <div className="row">

                        <CardColumns>
                            {menu}
                        </CardColumns>
                        <Modal isOpen={this.state.modalOpen} >
                            <ModalBody>
                                {dishDetail}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="info" onClick={this.toggleModal}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                    <div><br /><br /><br></br></div>
                </div>

            );
        }



    }
}

export default connect(mapStateProps, mapDispatchToProps)(Menu);