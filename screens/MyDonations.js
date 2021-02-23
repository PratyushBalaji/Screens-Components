import React, { Component } from 'react';
import DetailsScreen from './DetailsScreen';
import {View, Text, StyleSheet,} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class MyDonations extends Component {
    constructor(){
        super()
        this.state={
            donorId : firebase.auth().currentUser.email,
            donorName : '',
            allDonations : [],
        }
        this.requestRef = null;
    }
    getDonorDetails=(donorId)=>{
        db.collection('users').where('email_id','==',this.state.donorId).get()
        .then(snapshot=>{
          snapshot.forEach(doc=>{
            this.setState({
                "donorName": doc.data().first_name + " " + doc.data().last_name
            })
          })
        });
    }
    getAllDonations=()=>{
        this.requestRef = db.collection('all_donations').where('donor_id', '==', this.state.donorId).onSnapshot((snapshot)=>{
            var allDonations = [];
            snapshot.docs.map(()=>{
                var donation = doc.data();
                donation["doc_id"] = doc.id;
                allDonations.push(donation);
            })
            this.setState({allDonations:allDonations})
        })
    }
    componentDidMount(){
        this.getDonorDetails(this.state.donorId);
        this.getAllDonations();
    }
    componentWillUnmount(){
        this.requestRef()
    }
    render(){
        return(
            <View>

            </View>        
        )
    }
}