import { React, Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { postIdea } from '../../_services/commonService';
import { Button, Form, Alert } from "react-bootstrap";
import "./IdeasForm.scss";
import { Link } from 'react-router-dom';

class addIdeaForm extends Component {
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

    /* addEmail = () => {
        window.log(emails);
        emails.push(this.state.email);
        window.log(emails);
    }; */

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
            formData.append("FormUserId", "1");
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
            const msgTmp = (Number.isInteger(retId)) ? "Your idea has been submitted" : "There's was a server error, please try again.";
            this.setState({msg: msgTmp, msgVariant:Number.isInteger(retId)?"success":"danger"});
            if (Number.isInteger(retId)) {
                this.setState({dataObj:{...this.state.dataObj, title:"", email:"", description:""}});
            }
        }
    };

    render() {

        return (
            <>
            <Form className="ideasForm">
                <h3>back to <Link to="/" className="">Innolab</Link></h3>
                <br/>
                <center><h1 className="text-uppercase">Submit your idea</h1></center>
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
                    {/* <Button onClick={this.addEmail}>add</Button>
                    <Form.Text className="text-muted">
                        {emails.map((item) => (
                            <>
                                <Alert key={item} variant="secondary">
                                    {item}
                                </Alert>

                                <br></br>
                            </>
                        ))}
                    </Form.Text> */}
                    <Form.Group></Form.Group>
                   
                </Form.Group>

                {/* <Form.Group controlId="formCountry">
                    <Form.Label>
                        <h3>Country/Territory</h3>
                    </Form.Label>
                    <Form.Control
                        rows="3"
                        placeholder="country"
                        value={this.state.country}
                        onChange={(e) =>
                            this.setState({ country: e.target.value })
                        }
                        type="select"
                        as="select"
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group> */}
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
                {/* <Form.Group controlId="formFile">
                    <Form.Label>
                        <h3>Attachment</h3>
                    </Form.Label>
                    <Form.File
                        id="file"
                        rows={3}
                        placeholder="File"
                        onChange={(e) =>
                            this.setState({ file: e.target.files[0] }) // *** THIS SHOULD VALIDATE SELECTED FILE FORMAT, SIZE AND OTHERS IF APPLY ***
                        }
                        accept=".txt, .pdf, .zip, rar, pptx, .ppt, .xlsx, .xls, .docx, .doc, .png, .jpg, .jpeg"
                    />
                    <Form.Label>
                        One file only<br></br>
                        5 MB limit.<br></br>
                        Allowed types: .txt, .pdf, .zip, rar, pptx, .ppt, .xlsx, .xls, .docx, .doc, .png, .jpg, .jpeg
                        rar
                    </Form.Label>
                </Form.Group> */}
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
            </>
        );
    }
}

addIdeaForm.propTypes = {
    profile: PropTypes.any
}

const mapStateToProps = state => ({
    profile: state.auth.info
})


export default connect(mapStateToProps)(addIdeaForm)