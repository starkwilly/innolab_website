/* eslint-disable no-unused-vars */

//import { map } from "jquery";
import { log } from "async";
import { json } from "body-parser";
import { React, useState, Component } from "react";
import { Button, Form, Card, Alert } from "react-bootstrap";
import { uploadIdeasForm } from "../../_services/strapiService";
import "./IdeasForm.scss";
import { Link } from 'react-router-dom';

const emails = [];
const Addedmail = (emails) => {
    return emails.map;
};

export default class App extends Component {
    state = {
        title: "",
        email: "",
        description: "",
        file: null,
    };

    addEmail = () => {
        console.log(emails);
        emails.push(this.state.email);
        // eslint-disable-next-line react/no-direct-mutation-state
        console.log(emails);
    };

    onSubmit = () => {
        // eslint-disable-next-line no-debugger
        //debugger;
        console.log(this.state.title);
        console.log(this.state.email);
        console.log(this.state.file);

        var formData = new FormData();

        // formData.append('description',this.state.description);
        // this.uploadIdeasForm(formData).subscribe((data) => {
        //    console.log(data)
        //  })

        //event.preventDefault();
        //const data = new FormData();
        var SBtoken = sessionStorage.getItem("SBtoken");
        console.log("sbtoken");
        console.log(SBtoken);

        formData.append(
            "FormAnswers",
            JSON.stringify({
                Title: this.state.title,
                Creator: emails,
                Country: this.state.country,
                Description: this.state.description,
            })
        );

        //formData.append(this.state.file)

        // data.set("email", this.state.email);
        // data.set("country", this.state.country);
        // data.set("description", this.state.description);
        // data.set("file", emails);

        fetch(
            "https://stagingacc03-test.accenture.com/servicebus-dev/api/v1/form/SaveFormAnswer",
            {
                method: "POST",
                body: formData,
                headers: { Authorization: "Bearer " + JSON.parse(SBtoken) },
            }
        );
    };

    render() {
        return (
            <>
            <Link> </Link>
            <Form className="ideasForm">
                <Form.Group controlId="formTitle">
                    <Form.Label>
                        <h3>Idea title</h3>
                    </Form.Label>
                    <Form.Control
                        as="input"
                        rows="3"
                        placeholder="title"
                        value={this.state.title}
                        onChange={(e) =>
                            this.setState({ title: e.target.value })
                        }
                        type="text"
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>
                        <h3>Creator(s) email(s)</h3>
                    </Form.Label>
                    <Form.Control
                        as="input"
                        value={this.state.email}
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                        type="email"
                        placeholder="Enter email"
                    />
                     <Button onClick={this.addEmail}>add</Button>
                    <Form.Text className="text-muted">
                        {emails.map((item) => (
                            <>
                                <Alert key={item} variant="secondary">
                                    {item}
                                </Alert>

                                <br></br>
                            </>
                        ))}
                    </Form.Text>
                    <Form.Group></Form.Group>
                   
                </Form.Group>

                <Form.Group controlId="formCountry">
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
                </Form.Group>
                <Form.Group controlId="formDescription">
                    <Form.Label>
                        <h3>Idea description</h3>
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Description"
                        value={this.state.description}
                        onChange={(e) =>
                            this.setState({ description: e.target.value })
                        }
                        type="textarea"
                    />
                </Form.Group>
                <Form.Group controlId="formFile">
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
                        800 MB limit.<br></br>
                        Allowed types: txt pdf pptx docx xlsx ppt doc xls zip
                        rar
                    </Form.Label>
                </Form.Group>
                <Button
                    className="btnFormSend"
                    variant="light"
                    onClick={this.onSubmit}
                >
                    Submit
                </Button>
            </Form>
            </>
        );
    }
}
