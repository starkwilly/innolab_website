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
        dataObj: {
            title: "",
            email: "",
            description: "",
        }
    };

    /* addEmail = () => {
        console.log(emails);
        emails.push(this.state.email);
        console.log(emails);
    }; */

    onSubmit = async () => {
        this.setState({msg: ""});
        const isEmpty = Object.values(this.state.dataObj).some(x => (x === null || x === ''));

        if (!isEmpty) {
            var formData = new FormData();
            formData.append("FormUserId", "1");
            // formData.append("File", this.state.file);
            formData.append(
                "FormAnswers",
                JSON.stringify({
                    submitedBy: this.props.profile.username,
                    title: this.state.dataObj.title,
                    contact: this.state.dataObj.email,
                    description: this.state.dataObj.description,
                })
            );
            const ret = await postIdea(formData);
            console.log("postIdea RETURN", ret);
            const msgTmp = (Number.isInteger(Number.parseFloat(ret))) ? "Your idea has been submitted" : "There's was an issue, please try again.";
            this.setState({msg: msgTmp});
        }else{
            this.setState({msg: "Please fill all fields"});
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
                        rows="3"
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
                            this.setState({ file: e.target.files[0] })
                        }
                    />
                    <Form.Label>
                        One file only<br></br>
                        5 MB limit.<br></br>
                        Allowed types: txt pdf pptx docx xlsx ppt doc xls zip
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
                    <Alert variant="danger">{this.state.msg}</Alert>
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