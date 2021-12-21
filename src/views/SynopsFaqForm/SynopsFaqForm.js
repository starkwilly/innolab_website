import { React, Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { postIdea } from '../../_services/commonService';
import { Button, Form, Alert } from "react-bootstrap";
import "../IdeasForm/IdeasForm.scss";

import Container from '../../../node_modules/react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SynopsFaqForm extends Component {
    state = {
        msg: "",
        msgVariant: "",
        file: null,
        dataObj: {
            title: "",
            email: "",
            description: "",
        }
    };



    onSubmit = async () => {
        this.setState({msg:"", msgVariant:""});

        const isEmpty = Object.values(this.state.dataObj).some(x => (x === null || x === ''));
        const isEmailValid = RegExp(/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/gi).test(this.state.dataObj.email);

        if (isEmpty) {
            this.setState({msg: "Please fill all fields", msgVariant:"danger"});
        }else if (!isEmailValid) {
            this.setState({msg: "Please enter valid email", msgVariant:"danger"});
        }else{
            var formData = new FormData();
            formData.append("FormUserId", "2");
            // formData.append("File", this.state.file); // *** PENDING: IF FILE UPLOAD, TRACK PROGRESS ***
            formData.append(
                "FormAnswers",
                JSON.stringify({
                    submitedBy: this.props.profile.username,
                    title: this.state.dataObj.title,
                    contact: this.state.dataObj.email,
                    description: this.state.dataObj.description,
                })
            );
            this.setState({msg:"Sending, please wait", msgVariant:"info"});
            const ret = await postIdea(formData);
            // window.log("postIdea RETURN", ret);
            const retId = Number.parseFloat(ret.data.value.id);
            const msgTmp = (Number.isInteger(retId)) ? "Your Question has been submitted" : "There's was a server error, please try again.";
            this.setState({msg: msgTmp, msgVariant:Number.isInteger(retId)?"success":"danger"});
            if (Number.isInteger(retId)) {
                this.setState({dataObj:{...this.state.dataObj, title:"", email:"", description:""}});
            }
        }
    };

    render() {

        return (
            <Container fluid="xs" >
                <Row justify-content-md-center>
                    <Col xs={12} md={{ span: 6, offset: 3 }}  lg={{ span: 6, offset: 3 }}>
            <Form className="ideasForm">
            <Form.Group controlId="formDescription">
                    <Form.Label>
                        <h3>Idea description</h3>
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        maxLength="3000"
                        placeholder="Description"
                        value={this.state.dataObj.description}
                        onChange={(e) =>
                            this.setState({ msg: "", dataObj: {...this.state.dataObj, description: e.target.value} })
                        }
                        type="textarea"
                    />
                </Form.Group>

                <Form.Group controlId="formTitle">
                    <Form.Label>
                        <h3>Idea title</h3>
                    </Form.Label>
                    <Form.Control
                        as="input"
                        maxLength="120"
                        placeholder="title"
                        value={this.state.dataObj.title}
                        onChange={(e) =>
                            this.setState({ msg: "", dataObj: {...this.state.dataObj, title: e.target.value} })
                        }
                        type="text"
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>
                        <h3>Creator email</h3>
                    </Form.Label>
                    <Form.Control
                        as="input"
                        maxLength="120"
                        value={this.state.dataObj.email}
                        onChange={(e) =>
                            this.setState({ msg: "", dataObj: {...this.state.dataObj, email: e.target.value} })
                        }
                        type="email"
                        placeholder="Enter email"
                    />
               
                    <Form.Group></Form.Group>
                   
                </Form.Group>

           
              
         
                <Button
                    className="btnFormSend"
                    variant="light"
                    onClick={this.onSubmit}
                >
                    Submit
                </Button>

            { (this.state.msg !== "") &&
                <div className="mt-2">
                    <Alert variant={this.state.msgVariant}>{this.state.msg}</Alert>
                </div>
            }
            </Form>
            </Col>
            </Row>
            </Container>
        );
    }
}

SynopsFaqForm.propTypes = {
    profile: PropTypes.any
}

const mapStateToProps = state => ({
    profile: state.auth.info
})


export default connect(mapStateToProps)(SynopsFaqForm)