import React from "react";
import { connect } from "react-redux";
import { actionUserList } from "../../../redux/list.redux";
import UserCard from "../../../components/user-card/user-card";

@connect(state=>state,{
    actionUserList
})
class Boss extends React.Component{

    componentDidMount(){
        this.props.actionUserList("NIUREN");
    }

    render(){
        const data = this.props.listData.lists;
        
        return (
            <div>
                {/* <UserCard userLists={data}></UserCard> */}
                111
            </div>
        )
    }
}

export default Boss