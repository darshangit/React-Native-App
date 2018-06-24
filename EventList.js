import React, { Component } from "react";
import ActionButton from "react-native-action-button";
import { FlatList, StyleSheet } from "react-native";
import EventCard from "./EventCard";
import { getEvents } from "./api";

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3'
    }
});

class EventList extends Component {
    static navigationOptions = {
        title: 'Your Events',
      };
      
    state = {
        events: []
    }

    componentDidMount() {

        setInterval(() => {

            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                })),
            });
        }, 1000);
        // const events = require('./db.json').events.map(e => ({
        //     ...e,
        //     date: new Date(e.date)
        // }));

        this.props.navigation.addListener('didFocus', () => {
            getEvents().then(events => this.setState({events}));
        })
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('form');
    }

     render(){
        return [
            <FlatList
            style={styles.list} 
            data={this.state.events}
            renderItem={({item}) => <EventCard event={item} />}
            keyExtractor = {item => item.id} key={1}
            /> ,
                <ActionButton key="fab" onPress={this.handleAddEvent} 
            buttonColor="rgba(231, 76, 60, 1)" key={2}/>
        ];
    }
}

export default EventList;