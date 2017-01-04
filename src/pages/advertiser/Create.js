/**
 * Created by ravi.hamsa on 9/22/16.
 */
import React, {Component} from 'react';
import {core, components} from 'react-starter-components';
import DropDown from "dropdown";
import Tree from "tree";
import {SimpleCheckbox, SimpleElement, SimpleSelect, SimpleInput, SimpleTextArea} from '../../components/simpleForm'
const {SmartWrapper, Loader, MessageStack} = core;
const {List, ViewStateManager, ViewState} = components.common;
const {Form, FormElement} = components.Form;

export default class AdvertiserCreate extends Component {

    render() {
        const  items = [] ;let i=1 ,item;
        while(i <1000){
            items.push({id:i,name:'item '+i});
            i++;
        }

        const treeList = [] ;
        let children = [] ,hasChild,n=0;
        i =1;
        while (i<30){

            item = {id:i,name:'state' +i, hasChild:false};
            if(i%5 ===0){
                children = []
                for(let j=i;j<i+5;j++){
                    if(j%5===0){
                        let subchild =[]
                        for(n=j;n<j+5;n++){
                            subchild.push({id:'sc'+n,name:'carrier'+n,parentId:'c'+j})
                        }
                        children.push({id:'c'+j,name:'city'+j,parentId:i,hasChild:true,children:subchild});
                    }
                    else{
                        children.push({id:'c'+j,name:'city'+j,parentId:i});
                    }


                }
                item = {...item,hasChild:true,children:children}
            }
            treeList.push(item);
            i++;
        }

        let selectTreeItems =[];
        selectTreeItems.push({id:1,name:'state' + 1});
        selectTreeItems.push({id:2,name:'state' + 2});
        selectTreeItems.push({id:3,name:'state' + 3});
        selectTreeItems.push({id:4,name:'state' + 4});
        selectTreeItems.push({id:5,name:'state' + 5});
        selectTreeItems.push({id:'c5',name:'city' + 5});
        selectTreeItems.push({id:'sc5',name:'carrier' + 5});
        let selectedItems = [{id:1,name:'item1'}];
        return <div>
            <div className="page-title"><i className="fa fa-user-plus" aria-hidden="true"></i> Create Advertiser: Simple Form</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Form className="form-horizontal">
                            <div className="element-group">
                                <h5 className="form-sub-title">Account Information</h5>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Sex</div>
                                    <div className="col-md-4"><DropDown showSearch={true} items={items} showClearSelection={true}></DropDown></div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">Language</div>
                                    <div className="col-md-4"><DropDown showSearch={true} items={items} showClearSelection={true} multiSelect={true} selectedItems={selectedItems}></DropDown></div>
                                </div>
                                <div className="row element-row gutter-sm">
                                    <div className="col-md-2 t-right control-label">State/City</div>
                                    <div className="col-md-4"><Tree showSearch={true} selectTreeItems={selectTreeItems} items={treeList} multiSelect={true}></Tree></div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    }
}
