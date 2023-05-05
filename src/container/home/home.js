import React from "react";
import { connect } from "react-redux";
import { NavBar } from 'antd-mobile';
import { Route, Switch } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";



import MainForm from "./MainForm";
import FormHeader from "./Header";

@connect(state => state, {
})
class Home extends React.Component {


    render() {

        return (
            <div>
                <NavBar mode="dark">
                    企业注册表单填写
                </NavBar>

                <div className="mt-45 mb-50">
                    <FormHeader />
                    <MainForm />
                </div>

            </div>
        )
    }
}

export default Home