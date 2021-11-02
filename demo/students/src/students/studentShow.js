import React from "react";
import {fetchStudent} from "../actions";
import {connect} from 'react-redux';

class StudentShow extends React.Component {
    componentDidMount() {
        this.props.fetchStudent();
        console.log(this.props);
    }

    renderStudents(){
        return this.props.students.map(student => {
            //console.log(student);
            return (
                <div className="item" key={student.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{student.name}</h2>
                            <p>{`DOB: ${student.dob}`}</p>
                            <p>{`age: ${student.age}`}</p>
                            <p>{`email: ${student.email}`}</p>
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui relaxed divided list">{this.renderStudents()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    //console.log(state);
    return {students: state.students};
};

export default connect(mapStateToProps, {fetchStudent: fetchStudent})(StudentShow);